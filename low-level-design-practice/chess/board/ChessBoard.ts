import { ChessBoard, ChessPieceNames, Color, Position, Square } from "../types";
import { ChessPiece } from "../pieces/ChessPiece";
import { EmptyPiece } from "../pieces/EmptyPiece";
import { PieceFactory } from "../pieces/PieceFactory";

export class Board {
  private board: ChessBoard;

  constructor() {
    this.board = this.initializeBoard();
  }

  private initializeBoard(): ChessBoard {
    const board: ChessBoard = Array(8)
      .fill(null)
      .map((_, row) =>
        Array(8)
          .fill(null)
          .map((_, col) => ({
            piece: new EmptyPiece({ row, col }, this),
            color: Color.NONE,
          }))
      );

    // Initialize pawns
    const pawnPieces = [
      ChessPieceNames.PAWN1,
      ChessPieceNames.PAWN2,
      ChessPieceNames.PAWN3,
      ChessPieceNames.PAWN4,
      ChessPieceNames.PAWN5,
      ChessPieceNames.PAWN6,
      ChessPieceNames.PAWN7,
      ChessPieceNames.PAWN8,
    ];

    // Place black pawns (row 1)
    for (let col = 0; col < 8; col++) {
      const position = { row: 1, col };
      board[1][col] = {
        piece: PieceFactory.createPiece(
          pawnPieces[col],
          position,
          Color.BLACK,
          this
        ),
        color: Color.BLACK,
      };
    }

    // Place white pawns (row 6)
    for (let col = 0; col < 8; col++) {
      const position = { row: 6, col };
      board[6][col] = {
        piece: PieceFactory.createPiece(
          pawnPieces[col],
          position,
          Color.WHITE,
          this
        ),
        color: Color.WHITE,
      };
    }

    // Initialize other pieces
    const backRowPieces = [
      ChessPieceNames.ROOK1,
      ChessPieceNames.KNIGHT1,
      ChessPieceNames.BISHOP1,
      ChessPieceNames.QUEEN,
      ChessPieceNames.KING,
      ChessPieceNames.BISHOP2,
      ChessPieceNames.KNIGHT2,
      ChessPieceNames.ROOK2,
    ];

    backRowPieces.forEach((piece, col) => {
      const blackPosition = { row: 0, col };
      board[0][col] = {
        piece: PieceFactory.createPiece(
          piece,
          blackPosition,
          Color.BLACK,
          this
        ),
        color: Color.BLACK,
      };

      const whitePosition = { row: 7, col };
      board[7][col] = {
        piece: PieceFactory.createPiece(
          piece,
          whitePosition,
          Color.WHITE,
          this
        ),
        color: Color.WHITE,
      };
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
    return this.board[position.row][position.col].piece instanceof EmptyPiece;
  }

  display(): void {
    console.log(this.board);
  }
}
