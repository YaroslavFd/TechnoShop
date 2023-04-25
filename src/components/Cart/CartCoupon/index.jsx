import { Button } from 'UI/Button';

import './styles.css';

const couponName = 'REACT<3';

const CartCoupon = ({ value, setIsCoupon, setCouponValue }) => {
  const applyCoupon = (event, value) => {
    event.preventDefault();

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
      onSubmit={(event) => applyCoupon(event, value)}
    >
      <input
        className="cart__coupon_input"
        type="text"
        placeholder="Coupon Code"
        value={value}
        onChange={(e) => changeCouponValue(e.target.value)}
      />
      <Button
        className="cart__coupon_button"
        onClick={(event) => applyCoupon(event, value)}
      >
        Apply Coupon
      </Button>
    </form>
  );
};

export default CartCoupon;
