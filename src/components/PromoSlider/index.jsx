import React, { useEffect, useState } from 'react';

import './styles.css';

const PromoSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const sliderItems = [
    {
      subtitle: 'iPhone 14 Series',
      title: 'Up to 10% off Vouche',
    },
    {
      subtitle: 'iPhone 15 Series',
      title: 'Up to 10% off Vouche',
    },
    {
      subtitle: 'iPhone 16 Series',
      title: 'Up to 10% off Vouche',
    },
    {
      subtitle: 'iPhone 17 Series',
      title: 'Up to 10% off Vouche',
    },
    {
      subtitle: 'iPhone 18 Series',
      title: 'Up to 10% off Vouche',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(
        activeSlide === sliderItems.length - 1 ? 0 : activeSlide + 1
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, sliderItems.length]);

  return (
    <div className="slider">
      <div className="slider-first">
        <div
          className="slider-first__blocks"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {sliderItems.map((item, index) => (
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
        {sliderItems.map((dot, index) => (
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
