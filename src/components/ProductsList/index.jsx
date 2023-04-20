import ProductCard from '../ProductCard';

import './styles.css';

export const ProductsList = ({ products, slideRef }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard
          key={`product-${product.id}`}
          slideRef={slideRef}
          {...product}
        />
      ))}
    </div>
  );
};
