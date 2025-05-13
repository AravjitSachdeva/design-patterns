import { Board } from "../board/ChessBoard";
import { ChessPiece } from "../pieces/ChessPiece";

export enum ChessPieceNames {
  ROOK1 = "ROOK1",
  ROOK2 = "ROOK2",
  KNIGHT1 = "KNIGHT1",
  KNIGHT2 = "KNIGHT2",
  BISHOP1 = "BISHOP1",
  BISHOP2 = "BISHOP2",
  KING = "KING",
  QUEEN = "QUEEN",
  PAWN1 = "PAWN1",
  PAWN2 = "PAWN2",
  PAWN3 = "PAWN3",
  PAWN4 = "PAWN4",
  PAWN5 = "PAWN5",
  PAWN6 = "PAWN6",
  PAWN7 = "PAWN7",
  PAWN8 = "PAWN8",
  EMPTY = "EMPTY",
}

export enum Color {
  BLACK = "BLACK",
  WHITE = "WHITE",
  NONE = "NONE",
}

export interface Position {
  row: number;
  col: number;
}

export type Square = {
  piece: ChessPiece;
  color: Color;
};

export type ChessBoard = Square[][];

export interface IChessPiece {
  name: ChessPieceNames;
  position: Position;
  color: Color;
  isCaptured: boolean;
  board: Board;
  possibleMoves: (position: Position) => Position[];
}
