import Banner from '../components/Banner';
import LeftSitebar from '../components/LeftSitebar';
import { ProductsList } from '../components/ProductsList';
import PromoSlider from '../components/PromoSlider';
import Services from '../components/Services';
import { Section } from '../containers/Section';
import { PRODUCTS } from '../data/products';

const Home = () => {
  return (
    <>
      <div className="container first-screen__container">
        <LeftSitebar />
        <PromoSlider />
      </div>
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
        <Services />
      </Section>
    </>
  );
};

export default Home;
