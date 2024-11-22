import { useCallback, useEffect, useMemo } from 'react';
import { usePositionStore } from '../../stores/PositionStore';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import { PositionEvent } from '../../stores/PositionStore/types';
import { useObservable } from '../../hooks/useObservable';
import { angleToIconMap } from './types';

export const Controls = (): React.ReactNode => {
  const { turnRight, moveForward, angle, events$ } = usePositionStore();

  const arrowIcon = useMemo(() => angleToIconMap[angle] || 'arrow-right', [angle]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.keyCode) {
        case 38:
          moveForward();
          break;
        case 37:
          turnRight();
          break;
      }
    },
    [turnRight, moveForward],
  );

  const positionEvent: PositionEvent | undefined = useObservable(events$, { reset: true });

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [onKeyDown]);

  return (
    <div className={styles.controls}>
      <div
        onClick={moveForward}
        className={`${styles.icon} ${positionEvent == PositionEvent.moveForward ? styles.active : ''} `}
      >
        <FeatherIcon icon={arrowIcon} size="50" />
      </div>
      <div onClick={turnRight} className={`${styles.icon} ${positionEvent == PositionEvent.turn ? styles.active : ''}`}>
        <FeatherIcon icon="corner-down-right" size="50" />
      </div>
    </div>
  );
};
