import { Suspense, useContext, useMemo } from 'react';

import DefaultIconComponent from './assets/eye.svg';

import { IconStoreContext } from './utils/context';

export const Icon = ({ name, className, style }) => {
  const iconStore = useContext(IconStoreContext);

  const IconComponent = useMemo(() => iconStore.get(name), [iconStore, name]);
  return (
    <Suspense fallback={<DefaultIconComponent style={style} />}>
      <IconComponent className={className} style={style} />
    </Suspense>
  );
};
