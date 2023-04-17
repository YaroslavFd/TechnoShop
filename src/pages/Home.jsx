import Banner from '../components/Banner';
import { ProductsList } from '../components/ProductsList';
import Servies from '../components/Servies';
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
        <ProductsList products={PRODUCTS} />
      </Section>

      <Section className="banner">
        <Banner />
      </Section>
      <Section>
        <Servies />
      </Section>
    </>
  );
};

export default Home;
