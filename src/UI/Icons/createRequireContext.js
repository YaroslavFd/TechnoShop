import { ReactComponent as DefaultComponent } from './assets/eye.svg';

export const createRequierContext = () => {
  try {
    console.log('try');
    return require.context('./assets', true, /\.svg$/, 'lazy');
  } catch {
    console.log('catch');
    return Promise.resolve({ default: DefaultComponent });
  }
};
