import React, { useState } from 'react';

import { Context } from '../Context';

import './style.css';

const ProductsSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = children.props.products.length;

  const handleNextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);

  const handlePrevSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);

  return (
    <Context.Provider value={{ handleNextSlide, handlePrevSlide }}>
      <div className="window">
        <div
          className="window-wrapper"
          style={{
            transform: `translateX(-${currentSlide * 300}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {children}
        </div>
        <button className="prevBtn" onClick={handlePrevSlide}>
          Prev
        </button>
        <button className="nextBtn" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </Context.Provider>
  );
};

export default ProductsSlider;
