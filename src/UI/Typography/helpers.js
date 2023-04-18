export const getTag = (type) => {
  if (type === '3xl') return 'h1';
  if (type === '2xl') return 'h2';
  if (type === 'xl') return 'h3';
  if (type === 'l') return 'h4';
  if (type.incudes('paragraph')) return 'p';
  return 'span';
};
