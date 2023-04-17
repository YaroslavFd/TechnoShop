import './styles.css';

const Servies = () => {
  return (
    <div className="servies__box">
      <div className="servies__block">
        <img
          className="servies__img"
          src="/img/icons/Services-fast.svg"
          alt="fast delivery"
        />
        <h3 className="servies__title">Free and fast delivery</h3>
        <p className="servies__text">Free delivery for all orders over $140</p>
      </div>

      <div className="servies__block">
        <img
          className="servies__img"
          src="/img/icons/Services-customer.svg"
          alt="fast delivery"
        />
        <h3 className="servies__title">24/7 customer service</h3>
        <p className="servies__text">Friendly 24/7 customer support</p>
      </div>

      <div className="servies__block">
        <img
          className="servies__img"
          src="/img/icons/Services-money.svg"
          alt="fast delivery"
        />
        <h3 className="servies__title"> Money back guarantee</h3>
        <p className="servies__text">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Servies;
