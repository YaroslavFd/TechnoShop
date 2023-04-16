import Banner from '../components/Banner';
import { ProductsList } from '../components/ProductsList';
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
      <Section
        className="mb-140"
        title="This Month"
        subtitle="Best Selling Products"
        btnClick={() => {}}
      >
        <ProductsSlider>
          <ProductsList products={PRODUCTS} />
        </ProductsSlider>
      </Section>

      <Section className="banner">
        <Banner />
      </Section>
    </>
  );
};

export default Home;
