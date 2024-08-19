import { expect, test } from "vitest";
import { fileToString } from "./fileToString";
import Lexer from "../src/lexer";
import { TokenType } from "../src/token";

test("nextToken returns proper tokens", () => {
  let djot = fileToString("./test/lexer.djot");
  let lexer = new Lexer(djot);

  let expected = [
    { tokenType: TokenType.Underscore, literal: "_" },
    { tokenType: TokenType.Star, literal: "*" },
    { tokenType: TokenType.Text, literal: " some text" },
    { tokenType: TokenType.Underscore, literal: "_" },
    { tokenType: TokenType.Star, literal: "*" },
    { tokenType: TokenType.Newline, literal: "\n" },
    { tokenType: TokenType.EOF, literal: "" },
  ];

  for (let token of expected) {
    expect(lexer.nextToken()).toStrictEqual(token);
  }
});
