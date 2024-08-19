import { readFileSync } from "fs";

export function fileToString(path: string): string {
  return readFileSync(path, { encoding: "utf8" })
    .toString()
    .replaceAll("\r\n", "\n");
}
