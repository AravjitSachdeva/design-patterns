import { ChessPieceNames, Color, Position } from "../types";
import { Board } from "../board/ChessBoard";
import { ChessPiece } from "./ChessPiece";
import { Pawn } from "./Pawn";
import { EmptyPiece } from "./EmptyPiece";

export class PieceFactory {
  static createPiece(
    name: ChessPieceNames,
    position: Position,
    color: Color,
    board: Board
  ): ChessPiece {
    switch (name) {
      case ChessPieceNames.PAWN1:
      case ChessPieceNames.PAWN2:
      case ChessPieceNames.PAWN3:
      case ChessPieceNames.PAWN4:
      case ChessPieceNames.PAWN5:
      case ChessPieceNames.PAWN6:
      case ChessPieceNames.PAWN7:
      case ChessPieceNames.PAWN8:
        return new Pawn(position, color, board);
      case ChessPieceNames.EMPTY:
        return new EmptyPiece(position, board);
      default:
        const piece = new EmptyPiece(position, board);
        piece.name = name; // Override the name to represent the correct piece
        piece.color = color;
        return piece;
    }
  }
}
