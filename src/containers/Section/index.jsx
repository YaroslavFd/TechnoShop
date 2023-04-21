import { SalesTimer } from 'components/Timer';
import { Button } from 'UI/Button';
import { SliderArrows } from 'UI/SliderArrows';
import { Typography } from 'UI/Typography';

import './styles.css';

export const Section = ({
  children,
  className = 'section',
  classNameContainer,
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
      <div className={`container ${classNameContainer}`}>
        {title && (
          <Typography
            className="mb-20"
            type="headXlBorderRed"
            size={16}
            weight={600}
            color="red"
          >
            {title}
          </Typography>
        )}
        <div className="section__title">
          {subtitle && withTimer && (
            <div className="d-flex align-center">
              <Typography className="mr-87" type="head2xl">
                {subtitle}
              </Typography>
              <SalesTimer targetDate={new Date('April 20, 2023 23:59:00')} />
            </div>
          )}
          {subtitle && !withTimer && (
            <Typography type="head2xl">{subtitle}</Typography>
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
