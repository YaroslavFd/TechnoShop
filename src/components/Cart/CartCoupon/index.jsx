import { useState } from 'react';
import { Button } from 'UI/Button';

import './styles.css';

const couponName = 'REACT<3';

const CartCoupon = ({ setIsCoupon }) => {
  const [couponValue, setCouponValue] = useState('');

  const applyCoupon = (e, value) => {
    e.preventDefault();

    setCouponValue('');
    if (couponName === value) {
      setIsCoupon(true);
    }
  };

  const changeCouponValue = (value) => {
    setCouponValue(value);
  };

  return (
    <form
      className="cart__coupon"
      onSubmit={(e) => applyCoupon(e, couponValue)}
    >
      <input
        className="cart__coupon_input"
        type="text"
        placeholder="Coupon Code"
        value={couponValue}
        onChange={(e) => changeCouponValue(e.target.value)}
      />
      <Button
        className="cart__coupon_button"
        onClick={(e) => applyCoupon(e, couponValue)}
      >
        Apply Coupon
      </Button>
    </form>
  );
};

export default CartCoupon;
