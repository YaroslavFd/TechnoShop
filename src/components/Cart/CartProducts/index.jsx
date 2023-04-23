import CartProduct from '../CartProduct';

import './styles.css';

const CartProducts = ({ products }) => {
  return (
    <div className="cart__block cart__block-list text">
      {products.map((product) => {
        return (
          <CartProduct
            key={product.id}
            name={product.name}
            id={product.id}
            src={product.src}
            price={product.price}
            count={product.count}
            totalPrice={product.totalPrice}
          />
        );
      })}
    </div>
  );
};

export default CartProducts;
