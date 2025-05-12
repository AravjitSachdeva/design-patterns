import { ChessPieces, Color, Position } from "../types";
import { Board } from "../board/ChessBoard";
import { ChessPiece } from "./ChessPiece";

export class Pawn extends ChessPiece {
  constructor(position: Position, color: Color, board: Board) {
    super(ChessPieces.PAWN1, position, color, false, board);
  }

  possibleMoves(position: Position): Position[] {
    const moves: Position[] = [];

    const cutPieceRight: Position = {
      row: this.position.row + 1,
      col: this.position.col + 1,
    };

    const cutPieceLeft: Position = {
      row: this.position.row + 1,
      col: this.position.col - 1,
    };

    const forwardMove: Position = {
      row: this.position.row + 1,
      col: this.position.col,
    };

    const doubleForwardMove: Position = {
      row: this.position.row + 2,
      col: this.position.col,
    };

    if (position.row === 6 && this.color === Color.WHITE) {
      moves.push(doubleForwardMove);
    }

    if (position.row === 1 && this.color === Color.BLACK) {
      moves.push(doubleForwardMove);
    }

    if (this.board.isEmpty(forwardMove)) {
      moves.push(forwardMove);
    }

    if (
      !this.board.isEmpty(cutPieceRight) &&
      this.board.getSquare(cutPieceRight).color !== this.color
    ) {
      moves.push(cutPieceRight);
    }

    if (
      !this.board.isEmpty(cutPieceLeft) &&
      this.board.getSquare(cutPieceLeft).color !== this.color
    ) {
      moves.push(cutPieceLeft);
    }

    return moves;
  }

  convertToQueen(): void {
    this.name = ChessPieces.QUEEN;
  }
}
