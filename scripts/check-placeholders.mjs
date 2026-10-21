import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const dataDir = join(process.cwd(), "data");
const placeholderPattern = /\[[^\]]+\]/g;

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.endsWith(".ts") || entry.endsWith(".tsx")) {
      results.push(fullPath);
    }
  }
  return results;
}

function main() {
  const files = walk(dataDir);
  const findings = [];

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const lines = content.split("\n");
    lines.forEach((line, i) => {
      const matches = line.match(placeholderPattern);
      if (matches) {
        matches.forEach((match) => {
          findings.push({ file, line: i + 1, match });
        });
      }
    });
  }

  if (findings.length === 0) {
    console.log("No placeholders found in data/.");
    return;
  }

  console.log(`Found ${findings.length} placeholder(s) in data/:\n`);
  for (const { file, line, match } of findings) {
    console.log(`  ${file}:${line}  ${match}`);
  }

  if (process.env.STRICT_PLACEHOLDERS === "true") {
    console.error(
      "\nSTRICT_PLACEHOLDERS is true: failing build until these are resolved.",
    );
    process.exit(1);
  }
}

main();
