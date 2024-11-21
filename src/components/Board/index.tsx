import { PropsWithChildren } from 'react';
import { Robot } from '../Robot';
import { Grid } from '../Grid';
import { Controls } from '../Controls';
import styles from './styles.module.scss';

interface BoardProps extends PropsWithChildren {}

export const Board = ({ children }: BoardProps): React.ReactNode => {
  return (
    <div className={styles.board}>
      {children}
      <div className={styles.gridContainer}>
        <Grid>
          <Robot />
        </Grid>
      </div>
      <Controls />
    </div>
  );
};
