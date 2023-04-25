import DefaultComponent from '../assets/eye.svg';

export const createRequierContext = () => {
  try {
    return require.context('../assets', true, /\.svg$/, 'lazy');
  } catch {
    return Promise.resolve({ default: DefaultComponent });
  }
};
