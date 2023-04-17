import Banner from '../components/Banner';
import ProductsSlider from '../components/ProductsSlider';
import { Section } from '../containers/Section';
import { PRODUCTS } from '../data/products';

const Home = () => {
  return (
    <>
      <Section
        className="mb-80"
        title="Today’s"
        subtitle="Flash Sales"
        withTimer
      >
        {/* TODOS */}
      </Section>

      <ProductsSlider
        products={PRODUCTS}
        className="mb-140"
        title="This Month"
        subtitle="Best Selling Products"
      />

      <Section className="banner">
        <Banner />
      </Section>
    </>
  );
};

export default Home;
