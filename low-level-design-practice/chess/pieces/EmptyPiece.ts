import { ChessPieceNames, Color, Position } from "../types";
import { ChessPiece } from "./ChessPiece";
import { Board } from "../board/ChessBoard";

export class EmptyPiece extends ChessPiece {
  constructor(position: Position, board: Board) {
    super(ChessPieceNames.EMPTY, position, Color.NONE, false, board);
  }

  possibleMoves(_position: Position): Position[] {
    return [];
  }
}
