import { Color, Position } from "../types";
import { Board } from "../board/ChessBoard";
import { ChessPiece } from "../pieces/ChessPiece";

export class ChessGame {
  private board: Board;
  private currentPlayer: Color;
  private capturedPiecesBlack: ChessPiece[];
  private capturedPiecesWhite: ChessPiece[];

  constructor() {
    this.board = new Board();
    this.currentPlayer = Color.WHITE;
    this.capturedPiecesBlack = [];
    this.capturedPiecesWhite = [];
  }

  performMove(
    piece: ChessPiece,
    fromPosition: Position,
    toPosition: Position
  ): void {
    if (piece.color !== this.currentPlayer) {
      throw new Error("Not your turn");
    }

    if (!piece.isEligibleMove(toPosition)) {
      throw new Error("Invalid move");
    }

    // Check if there's a piece at the destination
    const targetPiece = this.board.getPiece(toPosition);
    if (targetPiece) {
      if (targetPiece.color === piece.color) {
        throw new Error("Cannot capture your own piece");
      }
      this.capturePiece(targetPiece);
    }

    // Perform the move
    piece.move(toPosition);
    this.switchPlayer();
  }

  private capturePiece(piece: ChessPiece): void {
    piece.isCaptured = true;
    if (piece.color === Color.BLACK) {
      this.capturedPiecesBlack.push(piece);
    } else {
      this.capturedPiecesWhite.push(piece);
    }
  }

  private switchPlayer(): void {
    this.currentPlayer =
      this.currentPlayer === Color.WHITE ? Color.BLACK : Color.WHITE;
  }

  showEligibleMoves(piece: ChessPiece): Position[] {
    return piece.possibleMoves();
  }

  displayBoard(): void {
    this.board.display();
  }

  getCurrentPlayer(): Color {
    return this.currentPlayer;
  }
}
