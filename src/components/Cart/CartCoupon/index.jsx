import { Button } from 'UI/Button';

import './styles.css';

const CartCoupon = () => {
  return (
    <form className="cart__coupon">
      <input
        className="cart__coupon_input"
        type="text"
        placeholder="Coupon Code"
      />

      <Button className="cart__coupon_button">Apply Coupon</Button>
    </form>
  );
};

export default CartCoupon;
