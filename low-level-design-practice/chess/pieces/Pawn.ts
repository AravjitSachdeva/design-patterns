import { ChessPieces, Color, Position } from "../types";
import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {
  private hasMoved: boolean = false;

  constructor(position: Position, color: Color) {
    super(ChessPieces.PAWN1, position, color);
  }

  possibleMoves(): Position[] {
    const moves: Position[] = [];
    const direction = this.color === Color.WHITE ? -1 : 1;

    // Forward move
    const forwardMove: Position = {
      row: this.position.row + direction,
      col: this.position.col,
    };

    if (this.isWithinBoard(forwardMove)) {
      moves.push(forwardMove);
    }

    // Initial two-square move
    if (!this.hasMoved) {
      const doubleMove: Position = {
        row: this.position.row + 2 * direction,
        col: this.position.col,
      };
      if (this.isWithinBoard(doubleMove)) {
        moves.push(doubleMove);
      }
    }

    // Capture moves
    const captureMoves = [
      { row: this.position.row + direction, col: this.position.col - 1 },
      { row: this.position.row + direction, col: this.position.col + 1 },
    ];

    captureMoves.forEach((move) => {
      if (this.isWithinBoard(move)) {
        moves.push(move);
      }
    });

    return moves;
  }

  isEligibleMove(position: Position): boolean {
    return this.possibleMoves().some(
      (move) => move.row === position.row && move.col === position.col
    );
  }

  convertToQueen(): void {
    this.name = ChessPieces.QUEEN;
  }

  move(position: Position): void {
    super.move(position);
    this.hasMoved = true;
  }
}
