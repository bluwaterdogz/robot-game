import { Board } from '../../components/Board';
import styles from './styles.module.scss';
export const Home = (): React.ReactNode => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h1>Robot Game</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.boardContainer}>
          <Board />
        </div>
      </div>
    </div>
  );
};
