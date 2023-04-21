export const getTag = (type) => {
  if (type === 'head3xl') return 'h1';
  if (type === 'head2xl') return 'h2';
  if (type === 'headXl' || type === 'headXlBorderRed') return 'h3';
  if (type === 'headL') return 'h4';
  if (type === 'paragraph') return 'p';
  return 'span';
};
