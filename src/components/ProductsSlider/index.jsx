import { Section } from 'containers/Section';
import React, { useState } from 'react';

import { ProductsList } from '../ProductsList';

import './style.css';

const ProductsSlider = ({
  products,
  className,
  title,
  subtitle,
  withTimer,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = products.length;

  const handleNextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);

  const handlePrevSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);

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
            transform: `translateX(-${currentSlide * 300}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <ProductsList products={products} />
        </div>
      </div>
    </Section>
  );
};

export default ProductsSlider;
