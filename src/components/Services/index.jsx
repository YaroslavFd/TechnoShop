import './styles.css';

const Services = () => {
  return (
    <div className="services__box">
      <div className="services__block">
        <img
          className="services__img"
          src="/img/icons/Services-fast.svg"
          alt="fast delivery"
        />
        <h3 className="services__title">Free and fast delivery</h3>
        <p className="services__text">Free delivery for all orders over $140</p>
      </div>

      <div className="services__block">
        <img
          className="services__img"
          src="/img/icons/Services-customer.svg"
          alt="fast delivery"
        />
        <h3 className="services__title">24/7 customer service</h3>
        <p className="services__text">Friendly 24/7 customer support</p>
      </div>

      <div className="services__block">
        <img
          className="services__img"
          src="/img/icons/Services-money.svg"
          alt="fast delivery"
        />
        <h3 className="services__title"> Money back guarantee</h3>
        <p className="services__text">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Services;
