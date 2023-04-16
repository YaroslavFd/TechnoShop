import React, { useContext } from 'react';

import { Context } from '../../components/Context';
import CountdownTimer from '../../components/CountdownTimer';
import SliderArrows from '../../components/UI/SliderArrows';

import './styles.css';

export const Section = ({
  children,
  className = 'section',
  title,
  subtitle,
  withTimer,
  btnClick,
}) => {
  // const { handleNextSlide, handlePrevSlide } = useContext(Context);

  return (
    <section className={className}>
      <div className="container">
        {title && <h3 className="section__subtitle subtitle-red">{title}</h3>}
        <div className="section__title">
          {subtitle && withTimer && (
            <div className="d-flex align-center">
              <h2 className="section__title-text title mr-87">{subtitle}</h2>
              <CountdownTimer
                targetDate={new Date('April 20, 2023 23:59:00')}
              />
            </div>
          )}
          {subtitle && !withTimer && (
            <h2 className="section__title-text title">{subtitle}</h2>
          )}
          {btnClick && (
            <button className="button" onClick={btnClick}>
              View All
            </button>
          )}
          <SliderArrows
          // prevSlide={handlePrevSlide}
          // nextSlide={handleNextSlide}
          />
        </div>
        {children}
      </div>
    </section>
  );
};
