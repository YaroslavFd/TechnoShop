import { addProduct } from 'app/store/cart/cartSlice';
import {
  addFavorite,
  removeFavorite,
} from 'app/store/favorites/favoritesSlice';
import Banner from 'components/Banner';
import { CATEGORIES } from 'components/CategoriesList/constants';
import CategoryCard from 'components/CategoryCard';
import LeftSitebar from 'components/LeftSitebar';
import NewArrival from 'components/NewArrival';
import ProductCard from 'components/ProductCard';
import ProductsSlider from 'components/ProductsSlider';
import PromoSlider from 'components/PromoSlider';
import Services from 'components/Services';
import { Section } from 'containers/Section';
import { PRODUCTS } from 'data/products';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (e) => {
    const id = Number(e.currentTarget.dataset.productId);
    const findProduct = PRODUCTS.find((p) => p.id === id);
    if (findProduct) {
      dispatch(addProduct(findProduct));
    } else {
      throw Error('Что то пошло не так');
    }
  };

  const addToFavoritesHandler = (e) => {
    const id = Number(e.currentTarget.dataset.productId);
    const findProduct = PRODUCTS.find((p) => p.id === id);
    const isFavorite = favorites.products.some((p) => p.id === id);

    if (!findProduct) {
      throw Error('Что то пошло не так');
    }

    if (findProduct && !isFavorite) {
      dispatch(addFavorite(findProduct));
    } else {
      dispatch(removeFavorite({ id }));
    }
  };

  const viewDetails = (e) => {
    const id = Number(e.currentTarget.dataset.productId);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Section className="mb-140" classNameContainer="d-flex">
        <LeftSitebar />
        <PromoSlider />
      </Section>

      <ProductsSlider
        length={PRODUCTS.length}
        viewItems={4}
        type="products"
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
        withTimer
      >
        {PRODUCTS.map((product) => {
          const isFavorite = favorites.products.some(
            (fav) => fav.id === product.id
          );
          return (
            <ProductCard
              key={`product-${product.id}`}
              product={product}
              addToFavorites={addToFavoritesHandler}
              addToCart={addToCart}
              isFavorite={isFavorite}
              viewDetails={viewDetails}
            />
          );
        })}
      </ProductsSlider>
      <ProductsSlider
        length={CATEGORIES.length}
        viewItems={6}
        type="categories"
        className="mb-80"
        title="Categories"
        subtitle="Browse By Category"
      >
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </ProductsSlider>

      <Section
        className="month mb-140"
        title="Month"
        subtitle="Best Selling Products"
        btnClick={() => {}}
      >
        <div className="month-container">
          {PRODUCTS.map((product) => {
            const isFavorite = favorites.products.some(
              (fav) => fav.id === product.id
            );
            if (product.isBest) {
              return (
                <ProductCard
                  key={`product-${product.id}`}
                  product={product}
                  addToFavorites={addToFavoritesHandler}
                  addToCart={addToCart}
                  isFavorite={isFavorite}
                  viewDetails={viewDetails}
                />
              );
            }
          })}
        </div>
      </Section>

      <Section className="banner">
        <Banner />
      </Section>
      <Section className="mb-140" title="Featured" subtitle="New Arrival">
        <NewArrival />
      </Section>
      <Section>
        <Services />
      </Section>
    </>
  );
};

export default HomePage;
