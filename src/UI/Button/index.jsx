import cn from 'classnames';

import styles from './styles.module.scss';

export const Button = (props) => {
  const {
    id,
    type = 'button',
    className = '',
    contentClassName,
    appearance = 'red',
    children,
    onClick,
    disabled,
  } = props;

  return (
    <button
      id={id}
      className={cn(styles.button, className, {
        [styles.red]: appearance === 'red',
        [styles.white]: appearance === 'white',
        [styles.green]: appearance === 'green',
      })}
      type={type}
      onClick={onClick}
      style={disabled ? { opacity: 0.5, pointerEvents: 'none' } : {}}
    >
      <span className={contentClassName}>{children}</span>
    </button>
  );
};
