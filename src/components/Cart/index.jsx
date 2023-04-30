import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from 'UI/Breadcrumbs';
import { Typography } from 'UI/Typography';

import CartCoupon from './CartCoupon';
import CartProducts from './CartProducts';

import CartTitles from './CartTitles';
import CartTotal from './CartTotal';

import {
  decrease,
  deleteProduct,
  increase,
  setIsCoupon,
} from '../../app/store/cart/cartSlice';

import './styles.css';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const isCoupon = useSelector((state) => state.cart.isCoupon);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  // const handleChangeValue = (id, value) => {
  //   dispatch(changeValue({ id, count: Number(value) }));
  // };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', src: '/' },
          { name: 'Cart', src: '/cart' },
        ]}
      />

      <div className="cart__box">
        {products.length ? (
          <>
            <CartTitles />
            <CartProducts
              products={products}
              deleteProduct={handleDeleteProduct}
              increase={handleIncrease}
              decrease={handleDecrease}
              // changeValue={handleChangeValue}
            />
          </>
        ) : (
          <Typography>
            <h3 style={{ marginBottom: 30 }}>Корзина пуста</h3>
          </Typography>
        )}

        <div className="cart__block-link">
          <NavLink to="/">Return To Shop</NavLink>
        </div>

        {products.length ? (
          <div className="cart__block">
            <CartCoupon setIsCoupon={() => dispatch(setIsCoupon(true))} />
            <CartTotal isCoupon={isCoupon} products={products} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
