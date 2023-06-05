import cn from 'classnames';

import styles from './styles.module.scss';

export const Checkbox = ({
  children,
  value = '',
  className = '',
  appearance = '',
  type = 'checkbox',
  name,
  size = 24,
}) => {
  return (
    <label
      className={cn(styles.checkbox, className, {
        [styles.checkMark]: appearance === 'checkMark',
      })}
    >
      <input type={type} name={name} />
      <span style={{ width: size, height: size }}>{value}</span>
      {children}
    </label>
  );
};
