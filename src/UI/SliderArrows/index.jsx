import { Icon } from '../Icon';

import './styles.css';

export const SliderArrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="section__block_right">
      <div onClick={prevSlide} className="section__arrows">
        <Icon name="sectionArrowLeft" />
      </div>
      <div onClick={nextSlide} className="section__arrows">
        <Icon name="sectionArrowRight" />
      </div>
    </div>
  );
};
