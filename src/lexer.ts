import { Token, TokenType } from "./token";

export default class Lexer {
  input: string;
  position: number;
  nextPosition: number;
  char: string;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
    this.nextPosition = 0;
    this.char = "\0";

    this.advance();
  }

  nextToken(): Token {
    let next: Token;

    switch (this.char) {
      case "\0":
        next = newToken(TokenType.EOF, "");
        break;
      case "\n":
        next = newToken(TokenType.Newline, this.char);
        break;
      case "_":
        next = newToken(TokenType.Underscore, this.char);
        break;
      case "*":
        next = newToken(TokenType.Star, this.char);
        break;
      default:
        return this.textToToken();
    }

    this.advance();
    return next;
  }

  private textToToken(): Token {
    let start = this.position;
    while (!isSpecial(this.char)) {
      this.advance();
    }
    let text = this.input.slice(start, this.position);
    return newToken(TokenType.Text, text);
  }

  private advance() {
    this.char =
      this.nextPosition >= this.input.length
        ? "\0"
        : this.input[this.nextPosition];
    this.position = this.nextPosition;
    this.nextPosition += 1;
  }

  private peekChar(): string {
    return this.nextPosition >= this.input.length
      ? "\0"
      : this.input[this.nextPosition];
  }
}

function newToken(tokenType: TokenType, literal: string): Token {
  return { tokenType, literal };
}

function isSpecial(char: string): Boolean {
  return ["\0", "\n", "_", "*"].includes(char);
}
