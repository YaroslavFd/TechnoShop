import { Typography } from 'UI/Typography';

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
        <Typography type="headXl" className="services__title" size={20}>
          Free and fast delivery
        </Typography>
        <Typography
          type="paragraph"
          className="services__text"
          size={14}
          weight={400}
        >
          Free delivery for all orders over $140
        </Typography>
      </div>

      <div className="services__block">
        <img
          className="services__img"
          src="/img/icons/Services-customer.svg"
          alt="fast delivery"
        />
        <Typography type="headXl" className="services__title" size={20}>
          24/7 customer service
        </Typography>
        <Typography
          type="paragraph"
          className="services__text"
          size={14}
          weight={400}
        >
          Friendly 24/7 customer support
        </Typography>
      </div>

      <div className="services__block">
        <img
          className="services__img"
          src="/img/icons/Services-money.svg"
          alt="fast delivery"
        />
        <Typography type="headXl" className="services__title" size={20}>
          Money back guarantee
        </Typography>
        <Typography
          type="paragraph"
          className="services__text"
          size={14}
          weight={400}
        >
          We return money within 30 days
        </Typography>
      </div>
    </div>
  );
};

export default Services;
