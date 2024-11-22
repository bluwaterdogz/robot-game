import { usePositionStore } from '../../stores/PositionStore';
import { Sprite } from '@pixi/react';

interface RobotProps {
  imgUrl?: string;
}

export const Robot = ({ imgUrl = './robot-min.png' }: RobotProps): any => {
  const { position, cellSize, angle } = usePositionStore();
  return (
    <Sprite
      image={imgUrl}
      x={position.x * cellSize + 0.5 * cellSize}
      y={position.y * cellSize + 0.5 * cellSize}
      height={cellSize - 6}
      width={cellSize - 6}
      angle={angle}
      anchor={{
        x: 0.5,
        y: 0.5,
      }}
    />
  );
};
