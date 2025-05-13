import { Color, Position, Square, ChessPieceNames } from "../types";
import { Board } from "../board/ChessBoard";
import { ChessPiece } from "../pieces/ChessPiece";
import { EmptyPiece } from "../pieces/EmptyPiece";
export class ChessGame {
  private board: Board;
  private currentPlayer: Color;
  private capturedPiecesBlack: Square[];
  private capturedPiecesWhite: Square[];

  constructor() {
    this.board = new Board();
    this.currentPlayer = Color.WHITE;
    this.capturedPiecesBlack = [];
    this.capturedPiecesWhite = [];
  }

  performMove(
    piece: ChessPiece,
    toPosition: Position,
    fromPosition: Position
  ): void {
    if (piece.color !== this.currentPlayer) {
      throw new Error("Not your turn");
    }

    if (!piece.possibleMoves(fromPosition).includes(toPosition)) {
      throw new Error("Invalid move");
    }

    // Check if there's a piece at the destination
    const empty = this.board.isEmpty(toPosition);
    let currentSquare: Square = {
      piece: new EmptyPiece({ row: 0, col: 0 }, this.board),
      color: Color.NONE,
    };

    if (!empty) {
      const currentSquare = this.board.getSquare(toPosition);
      if (currentSquare.color === this.currentPlayer) {
        throw new Error("Cannot capture your own piece");
      } else {
        console.log("Capturing Opponent Piece");
        this.board.setSquare(toPosition, currentSquare);
      }
    }

    // add captured piece to the list

    if (this.currentPlayer === Color.BLACK) {
      this.capturedPiecesWhite.push(currentSquare);
    } else {
      this.capturedPiecesBlack.push(currentSquare);
    }

    // switch the player
    this.switchPlayer();
  }

  private switchPlayer(): void {
    this.currentPlayer =
      this.currentPlayer === Color.WHITE ? Color.BLACK : Color.WHITE;
  }

  getCurrentPlayer(): Color {
    return this.currentPlayer;
  }
}
