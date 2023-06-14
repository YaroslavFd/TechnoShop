import { addProduct } from 'app/store/cart/cartSlice';
import { removeFavorite } from 'app/store/favorites/favoritesSlice';
import ProductCard from 'components/ProductCard';
import ProductsSlider from 'components/ProductsSlider';
import { Section } from 'containers/Section';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'UI/Typography';

const FavoritesPage = () => {
  const { products } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const removeFromFavoritesHandler = (e) => {
    const id = Number(e.currentTarget.dataset.productId);
    dispatch(removeFavorite({ id }));
  };
  return (
    <Section className="favorites">
      <Typography type="head3xl" className="mb-20" size={20} weight={400}>
        Wishlist ({products.length})
      </Typography>
      <div className="d-flex" style={{ gap: '30px' }}>
        {products.length === 0 ? (
          <h1>В избранном ничего нет</h1>
        ) : (
          <ProductsSlider
            length={products.length}
            viewItems={4}
            type="products"
            className="favorites-slider"
          >
            {products.map((product) => (
              <ProductCard
                key={`product-${product.id}`}
                product={product}
                removeFromFavorites={removeFromFavoritesHandler}
                addToCart={() => dispatch(addProduct(product))}
                viewBtn={false}
                withRating={false}
              />
            ))}
          </ProductsSlider>
        )}
      </div>
    </Section>
  );
};

export default FavoritesPage;
