export interface Position {
  x: number;
  y: number;
}

export interface BoardDimension {
  x: number;
  y: number;
}

export enum PositionEvent {
  turn = 'turn',
  moveForward = 'move-forward',
}
