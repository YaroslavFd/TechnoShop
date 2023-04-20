import Banner from 'components/Banner';
import { CATEGORIES } from 'components/CategoriesList/constants';
import LeftSitebar from 'components/LeftSitebar';
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
        slides={PRODUCTS}
        type="products"
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
        withTimer
      />
      <ProductsSlider
        slides={CATEGORIES}
        type="categories"
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
      />
      <Section className="banner">
        <Banner />
      </Section>
      <Section>
        <Services />
      </Section>
    </>
  );
};

export default Home;
