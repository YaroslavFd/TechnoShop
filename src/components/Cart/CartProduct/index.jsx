import './styles.css';

const CartProduct = ({ name, src, price, count, totalPrice }) => {
  return (
    <div className="cart__block-row">
      <div className="cart__item">
        <button className="icon-cancel">✖</button>
        <img className="cart-image" src={src} alt="LCD Monitor" />
        <span className="cart__item-name">${name}</span>
      </div>
      <div className="cart__item">${price}</div>

      <div className="cart__item">
        <label className="cart__item-quantity">
          <input className="cart__item-input" type="number" value={count} />
          <button className="cart_arrow_up">
            <img
              className="cart_arrow_up-img"
              src="/img/icons/arrow-up.svg"
              alt="arrow up"
            />
          </button>
          <button className="cart_arrow_down">
            <img
              className="cart_arrow_down-img"
              src="/img/icons/arrow-down.svg"
              alt="arrow down"
            />
          </button>
        </label>
      </div>

      <div className="cart__item">${totalPrice}</div>
    </div>
  );
};

export default CartProduct;
