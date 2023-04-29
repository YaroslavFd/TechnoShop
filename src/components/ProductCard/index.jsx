import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from 'UI/Button';
import { Icon } from 'UI/Icon';

import { ProductRating } from './ProductRating';

import styles from './styles.module.scss';

const ProductCard = ({ product, addToFavorites, addToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.block}>
        <img className={styles.img} src={product.img} alt={product.title} />
        <div className={styles.badge}>{`-${product.discount}%`}</div>
        <Button
          className={cn(styles.boxBtn, styles.addToFavoriteBtn)}
          onClick={addToFavorites}
          data-product-id={product.id}
          appearance="icon"
        >
          <Icon name="favorites" />
        </Button>
        <Button
          className={cn(styles.boxBtn, styles.eyeBtn)}
          onClick={addToFavorites}
          data-product-id={product.id}
          appearance="icon"
        >
          <Icon name="eye" />
        </Button>
        <Button
          className={styles.addToCartBtn}
          data-product-id={product.id}
          appearance="black"
          onClick={addToCart}
        >
          <Icon className={styles.cartIcon} name="cartWhite" />
          Add To Cart
        </Button>
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
      <ProductRating />
    </div>
  );
};

export default ProductCard;
