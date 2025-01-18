import { Miniflare } from "miniflare";

const mf = new Miniflare({
  scriptPath: "./worker.js",
  modules: true,
});

let response = await mf.dispatchFetch("http://localhost:8787");

console.log({ text: await response.text() });

process.on("SIGINT", () => {
  mf.dispose();
  process.exit();
});
