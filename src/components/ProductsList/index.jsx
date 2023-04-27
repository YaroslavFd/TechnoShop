import ProductCard from '../ProductCard';

import './styles.css';

export const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={`product-${product.id}`} product={product} />
      ))}
    </div>
  );
};
