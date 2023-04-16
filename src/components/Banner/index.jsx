/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css';

const Banner = () => {
  return (
    <div className="container banner-container">
      <div className="banner__block">
        <h4 className="banner__block-subtitle">Categories</h4>
        <h2 className="banner__block-title">Enhance Your Music Experience</h2>
        <div className="banner__timer">
          <div className="banner__timer-group">
            <div className="banner__timer-digit">05</div>
            <div className="banner__timer-text">Days</div>
          </div>
          <div className="banner__timer-group">
            <div className="banner__timer-digit">23</div>
            <div className="banner__timer-text">Hours</div>
          </div>
          <div className="banner__timer-group">
            <div className="banner__timer-digit">59</div>
            <div className="banner__timer-text">Minutes</div>
          </div>
          <div className="banner__timer-group">
            <div className="banner__timer-digit">35</div>
            <div className="banner__timer-text">Seconds</div>
          </div>
        </div>
        <div className="banner__box-button">
          <a className="button banner__button" href="#">
            Buy Now!
          </a>
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
