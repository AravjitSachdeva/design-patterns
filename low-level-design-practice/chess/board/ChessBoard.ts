import { ChessBoard, ChessPieces, Color, Position, Square } from "../types";
import { ChessPiece } from "../pieces/ChessPiece";

export class Board {
  private board: ChessBoard;

  constructor() {
    this.board = this.initializeBoard();
  }

  private initializeBoard(): ChessBoard {
    const board: ChessBoard = Array(8)
      .fill(null)
      .map(() =>
        Array(8)
          .fill(null)
          .map(() => ({
            piece: ChessPieces.EMPTY,
            color: Color.NONE,
          }))
      );

    // Initialize pawns
    const pawnPieces = [
      ChessPieces.PAWN1,
      ChessPieces.PAWN2,
      ChessPieces.PAWN3,
      ChessPieces.PAWN4,
      ChessPieces.PAWN5,
      ChessPieces.PAWN6,
      ChessPieces.PAWN7,
      ChessPieces.PAWN8,
    ];

    // Place black pawns (row 1)
    for (let col = 0; col < 8; col++) {
      board[1][col] = { piece: pawnPieces[col], color: Color.BLACK };
    }

    // Place white pawns (row 6)
    for (let col = 0; col < 8; col++) {
      board[6][col] = { piece: pawnPieces[col], color: Color.WHITE };
    }

    // Initialize other pieces
    const backRowPieces = [
      ChessPieces.ROOK1,
      ChessPieces.KNIGHT1,
      ChessPieces.BISHOP1,
      ChessPieces.QUEEN,
      ChessPieces.KING,
      ChessPieces.BISHOP2,
      ChessPieces.KNIGHT2,
      ChessPieces.ROOK2,
    ];

    backRowPieces.forEach((piece, col) => {
      board[0][col] = { piece, color: Color.BLACK };
      board[7][col] = { piece, color: Color.WHITE };
    });

    return board;
  }

  getSquare(position: Position): Square {
    return this.board[position.row][position.col];
  }

  setSquare(position: Position, square: Square): void {
    this.board[position.row][position.col] = square;
  }

  isEmpty(position: Position): boolean {
    return this.board[position.row][position.col].piece === ChessPieces.EMPTY;
  }

  display(): void {
    console.log(this.board);
  }
}
