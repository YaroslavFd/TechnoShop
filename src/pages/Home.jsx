import Banner from 'components/Banner';
import CategoriesList from 'components/CategoriesList';
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
        products={PRODUCTS}
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
        withTimer
      />
      <Section
        className="mb-80"
        title="Browse By Category"
        subtitle="Categories"
      >
        <CategoriesList categories={CATEGORIES} />
      </Section>
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
