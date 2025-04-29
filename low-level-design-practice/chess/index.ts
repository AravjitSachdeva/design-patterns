// entities in a chess game

// board
// 2-d array of 8X8
// mark the positions on the board (includes the piece and the color)

// functions needed
// show eligible moves
// perform move
// start game
// if the user selects a move, then  we must ensure no other piece exists on the move

enum ChessPieces {
  rook1,
  rook2,
  knight1,
  knight2,
  bishop1,
  bishop2,
  king,
  queen,
  pawn1,
  pawn2,
  pawn3,
  pawn4,
  pawn5,
  pawn6,
  pawn7,
  pawn8,
  empty,
}

enum Color {
  BLACK,
  WHITE,
  NONE,
}

interface Position {
  row: number;
  col: number;
}

type Square = {
  piece: ChessPieces;
  color: Color;
};

type ChessBoard = Square[][];

export class ChessGame {
  private board: ChessBoard;
  private currentPlayer: Color;
  private capturedPiecesBlack: [];
  private capturedPiecesWhite: [];

  constructor() {
    this.currentPlayer = Color.WHITE;
    this.board = this.initializeBoard();
  }

  private initializeBoard(): ChessBoard {
    const board = [];

    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push({ piece: ChessPieces.empty, color: Color.NONE });
      }
      board.push(row);
    }

    return board;
  }

  displayBoard(): void {
    console.log(this.board);
  }

  showEligibleMoves(piece: ChessPieces, position: board[][]) {
    // log all the elibible position for the given piece for the given piece
    // this function will also use the currentPlayer variable to determine the positions
  }

  performMove(piece, fromPosition, toPosition): void {
    // validate fromPosition
    // validate toPosition
    // if position occupied by same color, throw error
    // if position occupied by different color, call the cutPiece function
    // update the board
    // switch currentPlayer
  }

  cutPiece(position, piece): {};
  // remove piece from the position
  // add piece to the list of inactive pieces depending on the player
}
