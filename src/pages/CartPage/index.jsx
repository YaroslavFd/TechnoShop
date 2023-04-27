import Cart from 'components/Cart';
import { Section } from 'containers/Section';
const CartPage = () => {
  return (
    <>
      <Section className="cart" classNameContainer={'cart-container'}>
        <Cart />
      </Section>
    </>
  );
};

export default CartPage;
