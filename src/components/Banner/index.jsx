import { Button } from 'UI/Button';

import { BannerTimer } from '../Timer';

/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css';

const Banner = () => {
  return (
    <div className="container banner-container">
      <div className="banner__block">
        <h4 className="banner__block-subtitle">Categories</h4>
        <h2 className="banner__block-title">Enhance Your Music Experience</h2>
        <BannerTimer targetDate={new Date('April 18, 2023 23:59:00')} />
        <div className="banner__box-button">
          <Button type="button" appearance="green">
            Buy Now!
          </Button>
        </div>
      </div>

      <div className="banner__photo">
        <img
          className="banner__photo-img"
          src="/img/banner-photo.png"
          alt="JBL"
        />
      </div>
    </div>
  );
};

export default Banner;
