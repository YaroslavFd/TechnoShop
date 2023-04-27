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
    ...anotherProps
  } = props;

  return (
    <button
      id={id}
      className={cn(styles.button, className, {
        [styles.red]: appearance === 'red',
        [styles.white]: appearance === 'white',
        [styles.green]: appearance === 'green',
        [styles.icon]: appearance === 'icon',
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...anotherProps}
    >
      {appearance === 'icon' ? (
        children
      ) : (
        <span className={contentClassName}>{children}</span>
      )}
    </button>
  );
};
