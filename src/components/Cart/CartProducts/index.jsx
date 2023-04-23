import CartProduct from '../CartProduct';

import './styles.css';

const CartProducts = ({
  products,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
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
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
          />
        );
      })}
    </div>
  );
};

export default CartProducts;
