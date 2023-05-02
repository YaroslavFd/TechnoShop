import cn from 'classnames';
import { Suspense, useContext, useMemo } from 'react';

import DefaultIconComponent from './assets/eye.svg';

import { IconStoreContext } from './utils/context';

// eslint-disable-next-line import/order
import styles from './styles.module.scss';

export const Icon = ({ name, className, style, isActive }) => {
  const iconStore = useContext(IconStoreContext);

  const IconComponent = useMemo(() => iconStore.get(name), [iconStore, name]);
  return (
    <Suspense fallback={<DefaultIconComponent style={style} />}>
      <IconComponent
        className={cn(styles.icon, className, {
          [styles.active]: isActive,
        })}
        style={style}
      />
    </Suspense>
  );
};
