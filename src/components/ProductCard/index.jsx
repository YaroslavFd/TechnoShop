import { decrease, deleteProduct, increase } from 'app/store/cart/cartSlice';
import cn from 'classnames';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'UI/Button';
import { Icon } from 'UI/Icon';

import { ProductRating } from './ProductRating';

import styles from './styles.module.scss';

const ProductCard = ({
  product,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  isFavorite,
  viewDetails,
  viewBtn = true,
  withRating = true,
}) => {
  const dispatch = useDispatch();

  const productInCart = useSelector((state) => state.cart.products).find(
    (item) => item.id === product.id
  );

  const incrementHandler = () => {
    dispatch(increase(product.id));
  };

  const decrementHandler = () => {
    if (productInCart.count <= 1) {
      dispatch(deleteProduct(product.id));
    } else {
      dispatch(decrease(product.id));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.block}>
        <img className={styles.img} src={product.img} alt={product.title} />
        <div className={styles.badge}>{`-${product.discount}%`}</div>
        <Button
          className={cn(styles.boxBtn, styles.addToFavoriteBtn)}
          onClick={addToFavorites ? addToFavorites : removeFromFavorites}
          data-product-id={product.id}
          appearance="icon"
        >
          <Icon
            name={addToFavorites ? 'favorites' : 'trash'}
            isActive={isFavorite}
          />
        </Button>
        {viewBtn && (
          <Button
            className={cn(styles.boxBtn, styles.eyeBtn)}
            data-product-id={product.id}
            appearance="icon"
            onClick={viewDetails}
          >
            <Icon name="eye" />
          </Button>
        )}
        {productInCart ? (
          <div className={styles.counter}>
            <button className={styles.btnLeft} onClick={decrementHandler}>
              -
            </button>
            <span>{productInCart.count}</span>
            <button className={styles.btnRight} onClick={incrementHandler}>
              +
            </button>
          </div>
        ) : (
          <Button
            className={styles.addToCartBtn}
            data-product-id={product.id}
            appearance="black"
            onClick={addToCart}
          >
            <Icon className={styles.cartIcon} name="cartWhite" />
            Add To Cart
          </Button>
        )}
      </div>
      <Link to={`/product/${product.id}`} className={styles.title}>
        {product.title}
      </Link>
      <p className={styles.price}>
        ${product.price}
        <span className={styles.oldPrice}>
          ${product.price * (1 + product.discount / 100)}
        </span>
      </p>
      {withRating && <ProductRating />}
    </div>
  );
};

export default ProductCard;
