import CartProduct from '../CartProduct';

import './styles.css';

const CartProducts = ({
  products,
  deleteProduct,
  increase,
  decrease,
  // changeValue,
}) => {
  const handleDeleteProduct = (event) => {
    const id = Number(event.currentTarget.dataset.productId);
    deleteProduct(id);
  };

  const handleIncrease = (event) => {
    const id = Number(event.currentTarget.dataset.productId);
    increase(id);
  };

  const handleDecrease = (event) => {
    const id = Number(event.currentTarget.dataset.productId);
    decrease(id);
  };

  return (
    <div className="cart__block cart__block-list text">
      {products.map((product) => {
        return (
          <CartProduct
            key={product.id}
            name={product.title}
            id={product.id}
            src={product.img}
            price={product.price}
            count={product.count}
            totalPrice={product.totalPrice}
            deleteProduct={handleDeleteProduct}
            increase={handleIncrease}
            decrease={handleDecrease}
            // changeValue={(value) => changeValue(product.id, value)}
          />
        );
      })}
    </div>
  );
};

export default CartProducts;
