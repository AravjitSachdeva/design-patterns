// functions needed
// show eligible moves
// perform move
// start game
// if the user selects a move, then  we must ensure no other piece exists on the move

// todo
// how to find out the eligble moves for each piece type?
// if no eligble move for king then return winner

// All shared types and interfaces
export enum ChessPieces {
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

export enum Color {
  BLACK,
  WHITE,
  NONE,
}

export interface Position {
  row: number;
  col: number;
}

export type Square = {
  piece: ChessPieces;
  color: Color;
};

export type ChessBoard = Square[][];

interface ChessPiece {
  name: ChessPieces; // rook, knight, etc. - could be enum if you want, but I don't think it's necessary yet
  position: Position; // location on board
  color: Color; // again, could be enum if you want
  isCaptured: boolean; // could convert to a State enum if you'd like
  possibleMoves: () => Position[]; // array of possible positions the piece could move to
  isEligibleMove: (position: Position) => boolean; // true or false if piece can move there
  move: (position: Position) => void; // throw exception if invalid move
  // ... probably other attributes/functions, but this should be a decent start
}

interface Pawn extends ChessPiece {
  convertToQueen: () => void; // pawn reaches other side of board and becomes queen
}

export class ChessGame {
  private board: ChessBoard;
  private currentPlayer: Color;
  private capturedPiecesBlack: ChessPiece[];
  private capturedPiecesWhite: ChessPiece[];

  constructor() {
    this.currentPlayer = Color.WHITE;
    this.board = this.initializeBoard();∂
    this.capturedPiecesBlack = [];
    this.capturedPiecesWhite = [];
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

    board[0][0] = { piece: ChessPieces.rook1, color: Color.WHITE };
    board[0][1] = { piece: ChessPieces.knight1, color: Color.WHITE };
    // initialize the rest of the board for both black and white players

    return board;
  }

  displayBoard(): void {
    console.log(this.board);
  }

  showEligibleMoves(piece: ChessPieces, position: Position) {
    // log all the elibible position for the given piece
    if (piece == ChessPieces.bishop1) {
      this.showEligibleMovesBishop(position);
    }

    if (piece == ChessPieces.rook1 || piece == ChessPieces.rook2) {
      this.showEligibleMovesRook(position);
    }

    // same for all the other pieces

    // this function will also use the currentPlayer variable to determine the positions
  }

  showEligibleMovesBishop(position: Position) {
    let row = position.row;
    let col = position.col;

    // determine all possible squares
    let allPossibleSquares = [];

    // write a dfs function here to explore all the possible moves

    // return the list
  }

  showEligibleMovesRook(position: Position) {
    let row = position.row;
    let col = position.col;

    // determine all possible squares
    let allPossibleSquares = [];

    // write a dfs function here to explore all the possible moves
  }

  // write the functions for all the pieces using dfs

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

export * from './types';
export * from './pieces/ChessPiece';
export * from './pieces/Pawn';
export * from './board/ChessBoard';
export * from './game/ChessGame';
