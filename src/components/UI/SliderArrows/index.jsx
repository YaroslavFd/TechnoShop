import './styles.css';

const SliderArrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="section__block_right">
      <div onClick={prevSlide} className="section__arrows">
        <img src="/img/icons/section-arrow-left.svg" alt="arrow left" />
      </div>
      <div onClick={nextSlide} className="section__arrows">
        <img src="/img/icons/section-arrow-right.svg" alt="arrow right" />
      </div>
    </div>
  );
};

export default SliderArrows;
