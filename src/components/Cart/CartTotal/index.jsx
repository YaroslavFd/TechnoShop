import { Button } from 'UI/Button';

import './styles.css';

const CartTotal = ({ total, isCoupon }) => {
  const costShipping = 50;
  const priceWithCoupon = total * 0.8;
  return (
    <div className="cart__total">
      <h3 className="cart__total-title">Cart Total</h3>
      <div className="cart_-total-list">
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Subtotal:</p>
          <div className="cart__total-price">
            <span className="dollar">$</span>
            {total}
          </div>
        </div>
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Shipping:</p>
          <div className="cart__total-price">
            {total > 300 ? 'Free' : total !== 0 ? `$${costShipping}` : '$0'}
          </div>
        </div>
        <div className="cart__total-item">
          <p className="cart__total-text">Total:</p>
          <div className="cart__total-prices">
            <div
              className={
                isCoupon ? 'cart__total-price coupon' : 'cart__total-price'
              }
            >
              <span className="dollar">$</span>
              {total > 300 ? total : total !== 0 ? total + costShipping : 0}
            </div>
            {isCoupon && (
              <div className="cart__total-price--new">
                <span className="dollar">$</span>
                {priceWithCoupon}
              </div>
            )}
          </div>
        </div>
      </div>
      <Button className="cart__total-button">Procees to checkout</Button>
    </div>
  );
};

export default CartTotal;
