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

const Home = () => {
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
        {PRODUCTS.map((product) => (
          <ProductCard key={`product-${product.id}`} {...product} />
        ))}
      </ProductsSlider>
      {/* <ProductsSlider
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
      </ProductsSlider> */}
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

export default Home;
