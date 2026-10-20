// Genera los PDF de la hoja de vida en public/cv/ a partir de /es/cv (español) y /cv (inglés).
// Requiere un build previo (dist/), Google Chrome y Node 22+ (WebSocket global). Uso: `npm run cv`.
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const port = 4329;
const debugPort = 9339;
const base = `http://127.0.0.1:${port}`;
const pages = [
  { path: "/es/cv", output: resolve("public/cv/cv_miguel_angel_posada.pdf") },
  { path: "/cv", output: resolve("public/cv/cv_miguel_angel_posada_en.pdf") },
];
const chromeBin = process.env.CHROME_PATH ?? "google-chrome";
const profileDir = mkdtempSync(join(tmpdir(), "cv-chrome-"));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitFor(check, label) {
  for (let i = 0; i < 75; i++) {
    try {
      const result = await check();
      if (result) return result;
    } catch {}
    await sleep(200);
  }
  throw new Error(`No respondió: ${label}`);
}

const server = spawn("npx", ["astro", "preview", "--host", "127.0.0.1", "--port", String(port)], { stdio: "ignore" });
const chrome = spawn(
  chromeBin,
  ["--headless=new", `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, "about:blank"],
  { stdio: "ignore" },
);

try {
  await waitFor(async () => (await fetch(`${base}/cv`)).ok, base);
  const target = await waitFor(async () => {
    const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json();
    return targets.find((t) => t.type === "page");
  }, "Chrome DevTools");

  // Cliente mínimo del protocolo DevTools
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r, reject) => ((ws.onopen = r), (ws.onerror = reject)));
  let nextId = 0;
  const pending = new Map();
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    pending.get(data.id)?.(data);
    pending.delete(data.id);
  };
  const send = (method, params = {}) =>
    new Promise((r, reject) => {
      const id = ++nextId;
      pending.set(id, (data) => (data.error ? reject(new Error(data.error.message)) : r(data.result)));
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send("Page.enable");
  const onMessage = ws.onmessage;
  for (const { path, output } of pages) {
    const loaded = new Promise((r) => {
      ws.onmessage = (msg) => {
        if (JSON.parse(msg.data).method === "Page.loadEventFired") r();
        onMessage(msg);
      };
    });
    await send("Page.navigate", { url: `${base}${path}` });
    await loaded;
    // Imprimir solo cuando las fuentes ya estén listas
    await send("Runtime.evaluate", { expression: "document.fonts.ready.then(() => true)", awaitPromise: true });

    const { data } = await send("Page.printToPDF", { preferCSSPageSize: true, printBackground: true });
    writeFileSync(output, Buffer.from(data, "base64"));
    console.log(`CV generado: ${output}`);
  }
  await send("Browser.close").catch(() => {});
  ws.close();
} finally {
  server.kill();
  // Esperar a que Chrome cierre antes de borrar su perfil temporal
  await new Promise((r) => (chrome.exitCode !== null ? r() : (chrome.once("exit", r), chrome.kill())));
  try {
    rmSync(profileDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
  } catch {
    // Algún subproceso de Chrome sigue escribiendo: el sistema limpiará /tmp
  }
}
