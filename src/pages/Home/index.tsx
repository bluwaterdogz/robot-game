import { Board } from '../../components/Board';
import styles from './styles.module.scss';
export const Home = (): React.ReactNode => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h1>Robot Game</h1>
        <p className={styles.description}>
          Press the 'Up' or 'Left' arrows on your keyboard respectively to move forward or turn the robot.
          Alternatively, click the controls below the board. Have a ball!{' '}
        </p>
      </div>
      <div className={styles.contents}>
        <div className={styles.boardContainer}>
          <Board />
        </div>
      </div>
    </div>
  );
};
