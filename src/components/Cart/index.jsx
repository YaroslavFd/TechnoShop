import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from 'UI/Breadcrumbs';
import { Button } from 'UI/Button';

import CartCoupon from './CartCoupon';
import CartProducts from './CartProducts';
import CartTitles from './CartTitles';
import CartTotal from './CartTotal';
import { PRODUCTS } from './data';

import './styles.css';

const Cart = () => {
  const [cart, setCart] = useState(PRODUCTS);
  const [couponValue, setCouponValue] = useState('');
  const [isCoupon, setIsCoupon] = useState(false);

  let totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.totalPrice;
  }, 0);

  const couponName = 'REACT<3';

  const applyCoupon = (event, value) => {
    event.preventDefault();

    setCouponValue('');
    if (couponName === value) {
      setIsCoupon(true);
    }
  };

  const [total, setTotal] = useState(totalPrice);

  useEffect(() => {
    setTotal(totalPrice);
  }, [cart]);

  const deleteProduct = (id) => {
    setCart(cart.filter((item) => id !== item.id));
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
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
    setCart((cart) => {
      return cart.map((product) => {
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
    setCart((cart) => {
      return cart.map((product) => {
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

  const changeCouponValue = (value) => {
    setCouponValue(value);
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
        {cart.length ? (
          <CartTitles />
        ) : (
          <h2 style={{ marginBottom: 30 }}>Корзина пуста</h2>
        )}

        <CartProducts
          products={cart}
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
            changeCouponValue={changeCouponValue}
            applyCoupon={applyCoupon}
          />
          <CartTotal total={total} isCoupon={isCoupon} />
        </div>
      </div>
    </>
  );
};

export default Cart;
