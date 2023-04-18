import { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import { ProductsList } from '../components/ProductsList';
import Services from '../components/Services';
import { Section } from '../containers/Section';
import { useServiceContext } from '../Service/serviceContext';

const Home = () => {
  const { productService } = useServiceContext();

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productService]);

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
        {isLoading ? (
          <div>IsLoading</div>
        ) : (
          <ProductsList products={products} />
        )}
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
