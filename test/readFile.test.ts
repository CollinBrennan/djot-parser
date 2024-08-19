import { expect, test } from "vitest";
import { fileToString } from "./fileToString";

test("djotToString returns file content", () => {
  expect(fileToString("test/readFile.djot")).toBe("this is a test 😊\n");
});
