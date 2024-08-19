export enum TokenType {
  EOF,
  Newline,
  Text,
  Underscore,
  Star,
}

export type Token = {
  tokenType: TokenType;
  literal: string;
};
