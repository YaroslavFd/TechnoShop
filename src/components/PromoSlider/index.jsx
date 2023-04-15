import React, { useEffect, useState } from 'react';

import promoItems from '../../data/promoItems';

import './styles.css';

const PromoSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(
        activeSlide === promoItems.length - 1 ? 0 : activeSlide + 1
      );
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className="slider">
      <div className="slider-first">
        <div
          className="slider-first__blocks"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {promoItems.map((item, index) => (
            <div key={index} className="slider-first__block">
              <h3 className="slider-first__subtitle">
                <img
                  className="slider-first__image"
                  src="/img/icons/Apple_logo.svg"
                  alt="apple"
                />
                {item.subtitle}
              </h3>
              <p className="slider-first__title">{item.title}</p>
              <a className="slider-first__shop" href="/#">
                ShopNow
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="slider__dots">
        {promoItems.map((_, index) => (
          <span
            key={index}
            className={`slider__dots_style ${
              activeSlide === index ? 'dot-active' : ''
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
