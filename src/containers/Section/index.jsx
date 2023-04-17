import { SalesTimer } from '../../components/Timer';
import SliderArrows from '../../components/UI/SliderArrows';
import { Button } from '../../UI/Button';

import './styles.css';

export const Section = ({
  children,
  className = 'section',
  title,
  subtitle,
  withTimer,
  btnClick,
  withSlider,
  prevSlide,
  nextSlide,
}) => {
  return (
    <section className={className}>
      <div className="container">
        {title && <h3 className="section__subtitle subtitle-red">{title}</h3>}
        <div className="section__title">
          {subtitle && withTimer && (
            <div className="d-flex align-center">
              <h2 className="section__title-text title mr-87">{subtitle}</h2>
              <SalesTimer targetDate={new Date('April 20, 2023 23:59:00')} />
            </div>
          )}
          {subtitle && !withTimer && (
            <h2 className="section__title-text title">{subtitle}</h2>
          )}
          {btnClick && (
            <Button type="button" appearance="red" onClick={btnClick}>
              View All
            </Button>
          )}
          {withSlider && (
            <SliderArrows prevSlide={prevSlide} nextSlide={nextSlide} />
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
