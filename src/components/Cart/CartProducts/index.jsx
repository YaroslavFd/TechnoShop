import CartProduct from '../CartProduct';

import './styles.css';

const CartProducts = ({ products, deleteProduct, increase, decrease }) => {
  const handleDeleteProduct = (event) => {
    const id = Number(event.currentTarget.dataset.productId);
    deleteProduct(id);
  };

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
            deleteProduct={handleDeleteProduct}
            increase={() => increase(product.id)}
            decrease={() => decrease(product.id)}
            // changeValue={(value) => changeValue(product.id, value)}
          />
        );
      })}
    </div>
  );
};

export default CartProducts;
