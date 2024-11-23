import { useMemo } from 'react';
import { Board } from '../../components/Board';
import { LangMap } from '../../stores/IntlStore/consts';
import styles from './styles.module.scss';
import { useIntlStore } from '../../stores/IntlStore';
import { FormattedMessage } from 'react-intl';

export const Home = (): React.ReactNode => {
  const langs = useMemo(() => Object.keys(LangMap), [LangMap]);
  const { setLocale } = useIntlStore();
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <div className={styles.langLinkList}>
          {langs.map(l => (
            <div className={styles.langLink} key={l} onClick={() => setLocale(l)}>
              {l}
            </div>
          ))}
        </div>
        <div className={styles.titleContainer}>
          <h1>
            <FormattedMessage id="header" />
          </h1>
          <p className={styles.description}>
            <FormattedMessage id="description" />
          </p>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.boardContainer}>
          <Board />
        </div>
      </div>
    </div>
  );
};
