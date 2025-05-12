import { ChessPieces, Color, Position, IChessPiece } from "../types";
import { Board } from "../board/ChessBoard";
export abstract class ChessPiece implements IChessPiece {
  constructor(
    public name: ChessPieces,
    public position: Position,
    public color: Color,
    public isCaptured: boolean = false,
    public board: Board
  ) {}

  abstract possibleMoves(position: Position): Position[];
}
