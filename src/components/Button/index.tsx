import { ComponentProps, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren {}

export const Button = (props: ButtonProps): React.ReactNode => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className={`${props.className} ${styles.button}`}>
      {children}
    </button>
  );
};
