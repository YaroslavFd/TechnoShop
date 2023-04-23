import { Button } from 'UI/Button';

import './styles.css';

const CartTotal = () => {
  return (
    <div className="cart__total">
      <h3 className="cart__total-title">Cart Total</h3>
      <div className="cart_-total-list">
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Subtotal:</p>
          <div className="cart__total-price">
            <span className="dollar">$</span>1750
          </div>
        </div>
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Shipping:</p>
          <div className="cart__total-price">Free</div>
        </div>
        <div className="cart__total-item">
          <p className="cart__total-text">Total:</p>
          <div className="cart__total-price">
            <span className="dollar">$</span>1750
          </div>
        </div>
      </div>
      <Button className="cart__total-button">Procees to checkout</Button>
    </div>
  );
};

export default CartTotal;
