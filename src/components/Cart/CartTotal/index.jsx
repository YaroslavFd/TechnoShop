import { useNavigate } from 'react-router-dom';

import { Button } from 'UI/Button';
import { formatter } from 'utils/currencyFormatter';

import { CartPrice } from '../CartPrice';

import './styles.css';

const costShipping = 50;

const CartTotal = ({
  isCoupon,
  products,
  title = 'Cart Total',
  isBtn = true,
}) => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/checkout');
  };

  const totalPrice = products.reduce((prev, curr) => {
    return prev + curr.totalPrice;
  }, 0);

  const total = totalPrice > 300 ? totalPrice : totalPrice + costShipping;

  const priceWithCoupon = formatter.format(totalPrice * 0.8);
  return (
    <div className="cart__total">
      <h3 className="cart__total-title">{title}</h3>
      <div className="cart__total-list">
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Subtotal:</p>
          <div className="cart__total-price">
            <CartPrice price={totalPrice} />
          </div>
        </div>
        <div className="cart__total-item cart__total-line">
          <p className="cart__total-text">Shipping:</p>
          <div className="cart__total-price">
            {totalPrice > 300 ? 'Free' : formatter.format(costShipping)}
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
              <CartPrice price={total} />
            </div>
            {isCoupon && (
              <div className="cart__total-price--new">{priceWithCoupon}</div>
            )}
          </div>
        </div>
      </div>
      {isBtn && (
        <Button className="cart__total-button" onClick={handleNavigateClick}>
          Procees to checkout
        </Button>
      )}
    </div>
  );
};

export default CartTotal;
