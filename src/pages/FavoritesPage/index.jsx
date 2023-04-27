import ProductCard from 'components/ProductCard';
import { Section } from 'containers/Section';
import { useSelector } from 'react-redux';
import { Typography } from 'UI/Typography';

const FavoritesPage = () => {
  const { products } = useSelector((state) => state.favorites);
  return (
    <Section className="favorites">
      <Typography type="head3xl" className="mb-20" size={20} weight={400}>
        Wishlist ({products.length})
      </Typography>
      <div className="d-flex" style={{ gap: '30px' }}>
        {products.length === 0 ? (
          <h1>В избранном ничего нет</h1>
        ) : (
          products.map((product) => (
            <ProductCard key={`product-${product.id}`} product={product} />
          ))
        )}
      </div>
    </Section>
  );
};

export default FavoritesPage;
