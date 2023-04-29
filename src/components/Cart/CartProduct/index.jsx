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
  changeValue,
}) => {
  return (
    <div className="cart__block-row" data-product-id={id}>
      <div className="cart__item">
        <button className="icon-cancel" onClick={deleteProduct}>
          ✖
        </button>
        <img className="cart-image" src={src} alt="LCD Monitor" />
        <span className="cart__item-name">${name}</span>
      </div>
      <div className="cart__item">${price}</div>

      <div className="cart__item">
        <label className="cart__item-quantity">
          <input
            className="cart__item-input"
            type="number"
            value={count}
            onChange={(event) => changeValue(event.target.value)}
          />
          <button className="cart_arrow_up" onClick={increase}>
            <img
              className="cart_arrow_up-img"
              src="/img/icons/arrow-up.svg"
              alt="arrow up"
            />
          </button>
          <button className="cart_arrow_down" onClick={decrease}>
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
