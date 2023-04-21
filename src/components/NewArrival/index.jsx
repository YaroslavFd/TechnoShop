import './styles.css';

const NewArrival = () => {
  return (
    <div className="new__box">
      <div className="new__block new__block_1 cells-4">
        <div className="new__info new__info_1">
          <h3 className="new__title">PlayStation 5</h3>
          <p className="new__text">
            Black and White version of the PS5 coming out on sale.
          </p>
          <a className="new__link" href="/#">
            Shop Now
          </a>
        </div>
      </div>

      <div className="new__block new__block_2 cells-2">
        <div className="new__info new__info_2">
          <h3 className="new__title">Women’s Collections</h3>
          <p className="new__text">
            Featured woman collections that give you another vibe.
          </p>
          <a className="new__link" href="/#">
            Shop Now
          </a>
        </div>
      </div>

      <div className="new__block new__block_3">
        <div className="new__info new__info_3">
          <h3 className="new__title new__title_small-margin">Speakers</h3>
          <p className="new__text new__text_small-margin">
            Amazon wireless speakers
          </p>
          <a className="new__link" href="/#">
            Shop Now
          </a>
        </div>
      </div>
      <div className="new__block new__block_4">
        <div className="new__info new__info_4">
          <h3 className="new__title new__title_small-margin">Perfume</h3>
          <p className="new__text new__text_small-margin">
            {' '}
            Gucci intence oud edp
          </p>
          <a className="new__link" href="/#">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
