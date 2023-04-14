import { PRODUCTS } from '../../data/products';
import ProductCard from '../ProductCard';

import './styles.css';

export const ProductsList = () => {
  return (
    <section className="month">
      <div className="container month-container">
        <h3 className="section__subtitle subtitle-red">This Month</h3>
        <div className="section__title">
          <h2 className="section__title-text title">Best Selling Products</h2>
          <button className="button">View All</button>
        </div>
        <div className="product-list">
          {PRODUCTS.map((product) => (
            <ProductCard key={`product-${product.id}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
