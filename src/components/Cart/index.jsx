import PageMenu from 'components/PageMenu';
import { Button } from 'UI/Button';

import CartCoupon from './CartCoupon';
import CartProducts from './CartProducts';
import CartTitles from './CartTitles';
import CartTotal from './CartTotal';
import { PRODUCTS } from './data';

import './styles.css';

const Cart = () => {
  return (
    <>
      <PageMenu items={[{ name: 'Cart', src: '/#' }]} active={true} />

      <div className="cart__box">
        <CartTitles />
        <CartProducts products={PRODUCTS} />

        <div className="cart__block cart__block-buttons">
          <Button appearance="white">Return To Shop</Button>
          <Button appearance="white">Update Cart</Button>
        </div>

        <div className="cart__block">
          <CartCoupon />
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
