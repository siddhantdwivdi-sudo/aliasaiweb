// Netlify's drag-and-drop deploy skips folders that start with an underscore, which drops
// out/_next (all the CSS and JS). This renames it to out/nx and rewrites every reference, so
// the folder can be zipped and dragged onto Netlify. Not needed for Git-based deploys.
import { readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const OUT = "out";
const FROM = "/_next/";
const TO = "/nx/";
const TEXT = new Set([".html", ".js", ".css", ".txt", ".json", ".map"]);

renameSync(join(OUT, "_next"), join(OUT, "nx"));

let rewritten = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (TEXT.has(extname(name))) {
      const text = readFileSync(path, "utf8");
      if (text.includes(FROM)) {
        writeFileSync(path, text.replaceAll(FROM, TO));
        rewritten++;
      }
    }
  }
}
walk(OUT);
console.log(`Renamed out/_next to out/nx and rewrote ${rewritten} files.`);
