import Banner from '../components/Banner';
import ProductsSlider from '../components/ProductsSlider';
import Services from '../components/Services';
import { Section } from '../containers/Section';
import { PRODUCTS } from '../data/products';

const Home = () => {
  return (
    <>
      <ProductsSlider
        products={PRODUCTS}
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
        withTimer
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
