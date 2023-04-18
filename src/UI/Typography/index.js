import cn from 'classnames';
import { useMemo } from 'react';

import { getTag } from './helpers';

import styles from './styles.module.scss';

export const Typography = (props) => {
  const {
    id = '',
    className = '',
    type,
    title,
    size = 36,
    weight = '600',
    children,
    appearance = 'black',
    withLeftBorder,
  } = props;

  const Component = useMemo(() => getTag(type), [type]);
  return (
    <Component
      id={id}
      className={cn(className, {
        [styles.red]: appearance === 'red',
        [styles.black]: appearance === 'black',
        [styles.white]: appearance === 'white',
      })}
      title={title}
      style={{ fontWeight: weight, fontSize: `${size}px` }}
    >
      {children}
    </Component>
  );
};
