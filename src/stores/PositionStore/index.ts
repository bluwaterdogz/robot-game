import { create } from 'zustand';
import { InitialBoardDimensions, InitialCellSize, StartingPosition } from './consts';
import { BoardDimension, Position, PositionEvent } from './types';
import { Observable, Subject } from 'rxjs';
/**
 * Note: Chose to Add cell size and dimension to state for potential scalability
 */
interface PositionStoreState {
  position: Position;
  cellSize: number;
  boardDimension: BoardDimension;
  angle: number;
  events$: Observable<PositionEvent>;
  turnRight: () => void;
  moveForward: () => void;
}

export const usePositionStore = create<PositionStoreState>(set => {
  const events = new Subject<PositionEvent>();
  return {
    position: StartingPosition,
    boardDimension: InitialBoardDimensions,
    cellSize: InitialCellSize,
    angle: 0,
    events$: events.asObservable(),
    turnRight: () => {
      set(state => ({
        ...state,
        angle: (state.angle + 90) % 360,
      }));
      events.next(PositionEvent.turn);
    },
    moveForward: () => {
      set(state => {
        let newX, newY;
        const { position, boardDimension, angle } = state;
        const { x, y } = position;
        switch (angle) {
          case 0:
            newX = x + 1;
            break;
          case 90:
            newY = y + 1;
            break;
          case 180:
            newX = x - 1;
            break;
          case 270:
            newY = y - 1;
            break;
        }
        const updatedPosition = {
          x: newX != null && newX >= 0 && newX < boardDimension.x ? newX : x,
          y: newY != null && newY >= 0 && newY < boardDimension.y ? newY : y,
        };
        return {
          ...state,
          position: updatedPosition,
        };
      });
      events.next(PositionEvent.moveForward);
    },
  };
});
