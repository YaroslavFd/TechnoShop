import { formatter } from 'utils/currencyFormatter';

import './styles.css';

const CartProduct = ({
  name,
  src,
  price,
  count,
  id,
  totalPrice,
  deleteProduct,
  increase,
  decrease,
}) => {
  return (
    <div className="cart__block-row" data-product-id={id}>
      <div className="cart__item">
        <button
          className="icon-cancel"
          data-product-id={id}
          onClick={deleteProduct}
        >
          ✖
        </button>
        <img className="cart-image" src={src} alt={name} />
        <span className="cart__item-name">{name}</span>
      </div>
      <div className="cart__item">{formatter.format(price)}</div>

      <div className="cart__item">
        <label className="cart__item-quantity">
          <input
            className="cart__item-input"
            type="number"
            value={count}
            disabled
          />
          <button
            className="cart_arrow_up"
            data-product-id={id}
            onClick={increase}
          >
            <img
              className="cart_arrow_up-img"
              src="/img/icons/arrow-up.svg"
              alt="arrow up"
            />
          </button>
          <button
            className="cart_arrow_down"
            data-product-id={id}
            onClick={decrease}
          >
            <img
              className="cart_arrow_down-img"
              src="/img/icons/arrow-down.svg"
              alt="arrow down"
            />
          </button>
        </label>
      </div>

      <div className="cart__item">{formatter.format(totalPrice)}</div>
    </div>
  );
};

export default CartProduct;
