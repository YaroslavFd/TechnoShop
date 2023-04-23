import './styles.css';

const CartTitles = () => {
  return (
    <div className="cart__block-row cart__block-row_up">
      <p className="cart__item">Product</p>
      <p className="cart__item">Price</p>
      <p className="cart__item">Quantity</p>
      <p className="cart__item">Subtotal</p>
    </div>
  );
};

export default CartTitles;
