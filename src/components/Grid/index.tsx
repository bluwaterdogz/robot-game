import { Graphics, Stage } from '@pixi/react';
import { PropsWithChildren, useCallback } from 'react';
import { usePositionStore } from '../../stores/PositionStore';
import { PrimaryColor } from './consts';

interface GridProps extends PropsWithChildren {}

export const Grid = ({ children }: GridProps): React.ReactNode => {
  const { boardDimension, cellSize } = usePositionStore();

  const draw = useCallback(
    (g: any) => {
      g.clear();
      for (let y = 1; y < boardDimension.y; y++) {
        g.lineStyle(1, PrimaryColor, 1);
        g.moveTo(0, y * cellSize);
        g.lineTo(boardDimension.x * cellSize, y * cellSize);
        g.endFill();
      }

      for (let x = 1; x < boardDimension.x; x++) {
        g.lineStyle(1, PrimaryColor, 1);
        g.moveTo(x * cellSize, 0);
        g.lineTo(x * cellSize, boardDimension.x * cellSize);
        g.endFill();
      }
    },
    [cellSize, boardDimension],
  );

  return (
    <Stage width={boardDimension.x * cellSize} height={boardDimension.y * cellSize} options={{ background: 'white' }}>
      <Graphics draw={draw} />
      {children}
    </Stage>
  );
};
