import { useEffect, useRef, useState } from 'react';

export const useDynamicSvg = (iconName) => {
  const ref = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const importSvg = async () => {
      try {
        ref.current = await import(`./assets/${iconName}.svg`);
      } catch (e) {
        console.error(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    importSvg();
  }, [iconName]);

  return { loading, error, SvgIcon: ref.current };
};
