import { animated, useSpring } from 'react-spring';
import { formatter } from 'utils/currencyFormatter';

export const CartPrice = ({ className, price }) => {
  const { totalPrice } = useSpring({
    from: { totalPrice: 0 },
    totalPrice: price,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className={className}>
      {totalPrice.to((n) => formatter.format(n.toFixed(0)))}
    </animated.div>
  );
};
