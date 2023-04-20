import { Section } from 'containers/Section';
import React, { useState } from 'react';

import { ProductsList } from '../ProductsList';

import './style.css';

const ProductsSlider = ({
  slides,
  type,
  className,
  title,
  subtitle,
  withTimer,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef('');
  const slideWidth = slideRef.current.offsetWidth;
  const numSlides = slides.length;

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
            transform: `translateX(-${currentSlide * (slideWidth + 30)}px)`,
            transition:
              currentSlide === numSlides - 1 || currentSlide === 0
                ? 'none'
                : 'transform 0.5s ease-in-out',
          }}
        >
          {type === 'products' && (
            <ProductsList products={slides} slideRef={slideRef} />
          )}
          {type === 'categories' && (
            <CategoriesList categories={slides} slideRef={slideRef} />
          )}
        </div>
      </div>
    </Section>
  );
};

export default ProductsSlider;
