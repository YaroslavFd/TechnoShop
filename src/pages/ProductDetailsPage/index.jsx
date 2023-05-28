import { ProductDetails } from 'components/ProductDetails';
import { Section } from 'containers/Section';

const CheckOutPage = () => {
  return (
    <>
      <Section className="product" classNameContainer={'product__container'}>
        <ProductDetails />
      </Section>
    </>
  );
};

export default CheckOutPage;
