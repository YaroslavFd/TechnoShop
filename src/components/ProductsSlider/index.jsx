import { Section } from 'containers/Section';
import React, { useState } from 'react';

import './style.css';

const ProductsSlider = ({
  className,
  length,
  title,
  subtitle,
  withTimer,
  viewItems = 4,
  columnGap = 30,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef([]);
  const slideWidth = slideRef.current[currentSlide]?.offsetWidth || 100;
  const numSlides = length;
  const diff = numSlides - viewItems;

  const setItemRef = (item, index) => {
    if (!slideRef) {
      slideRef.current = [];
    }
    slideRef.current[index] = item;
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === diff) {
        prevSlide = 0;
      } else {
        prevSlide = prevSlide + 1;
      }
      return prevSlide;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        prevSlide = numSlides - viewItems;
      } else {
        prevSlide = prevSlide - 1;
      }
      return prevSlide;
    });
  };

  const renderItems = () => {
    return React.Children.map(children, (item, index) => {
      const props = {
        ref: (e) => setItemRef(e, index),
        key: index,
        className: 'wrapper-slide-item',
      };
      return <div {...props}>{item}</div>;
    });
  };

  return (
    <Section
      withSlider={true}
      prevSlide={handlePrevSlide}
      nextSlide={handleNextSlide}
      className={className}
      title={title}
      subtitle={subtitle}
      withTimer={withTimer}
    >
      <div className="slider-window">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${
              currentSlide * slideWidth + 30 * currentSlide
            }px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <div className="d-flex" style={{ columnGap: `${columnGap}px` }}>
            {renderItems()}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductsSlider;
