import { ChessPieces, Color, Position, IChessPiece } from "../types";

export abstract class ChessPiece implements IChessPiece {
  constructor(
    public name: ChessPieces,
    public position: Position,
    public color: Color,
    public isCaptured: boolean = false
  ) {}

  abstract possibleMoves(): Position[];
  abstract isEligibleMove(position: Position): boolean;

  move(position: Position): void {
    if (!this.isEligibleMove(position)) {
      throw new Error("Invalid move");
    }
    this.position = position;
  }

  protected isWithinBoard(position: Position): boolean {
    return (
      position.row >= 0 &&
      position.row < 8 &&
      position.col >= 0 &&
      position.col < 8
    );
  }
}
