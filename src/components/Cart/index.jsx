import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from 'UI/Breadcrumbs';
import { Typography } from 'UI/Typography';

import CartCoupon from './CartCoupon';
import CartProducts from './CartProducts';
import CartTitles from './CartTitles';
import CartTotal from './CartTotal';
import { PRODUCTS } from './data';

import './styles.css';

const Cart = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [couponValue, setCouponValue] = useState('');
  const [isCoupon, setIsCoupon] = useState(false);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => id !== item.id));
  };

  const increase = (id) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product.id === id) {
          const newCount = product.count + 1 > 100 ? 100 : ++product.count;
          return {
            ...product,
            count: newCount,
            totalPrice: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            totalPrice: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setProducts((products) => {
      return products.map((product) => {
        if (product.id === id) {
          const newValue = value !== 0 ? (value > 100 ? 100 : value) : 1;
          return {
            ...product,
            count: newValue,
            totalPrice: newValue * product.price,
          };
        }
        return product;
      });
    });
  };

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
          <CartTitles />
        ) : (
          <Typography>
            <h3 style={{ marginBottom: 30 }}>Корзина пуста</h3>
          </Typography>
        )}

        <CartProducts
          products={products}
          deleteProduct={deleteProduct}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />

        <div className="cart__block-link">
          <NavLink to="/">Return To Shop</NavLink>
        </div>

        <div className="cart__block">
          <CartCoupon
            value={couponValue}
            setIsCoupon={setIsCoupon}
            setCouponValue={setCouponValue}
          />
          <CartTotal isCoupon={isCoupon} products={products} />
        </div>
      </div>
    </>
  );
};

export default Cart;
