import cn from 'classnames';

import styles from './styles.module.scss';

export const RadioBtn = (props) => {
  const {
    className = '',
    appearance = 'black',
    name = 'radioBtn',
    children,
    ...anotherProps
  } = props;

  return (
    <label
      className={cn(styles.label, className, {
        [styles.black]: appearance === 'black',
        [styles.red]: appearance === 'red',
        [styles.blue]: appearance === 'blue',
      })}
      {...anotherProps}
    >
      <input type="radio" name={name} />
      <span className={styles.radioBtn}>
        <span></span>
      </span>
      {children}
    </label>
  );
};
