import { createContext, useContext } from 'react';
export const ServiceContext = createContext();

export function useServiceContext() {
  const serviceContext = useContext(ServiceContext);
  if (!serviceContext) {
    throw Error('There is no service context');
  }

  return serviceContext;
}
