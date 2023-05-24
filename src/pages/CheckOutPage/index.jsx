import { CheckOut } from 'components/CheckOut';
import { Section } from 'containers/Section';

const CheckOutPage = () => {
  return (
    <>
      <Section className="checkout" classNameContainer={'checkout__container'}>
        <CheckOut />
      </Section>
    </>
  );
};

export default CheckOutPage;
