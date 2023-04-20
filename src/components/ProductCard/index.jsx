import './styles.css';

const ProductCard = ({ title, price, discount, img }) => {
  return (
    <div className="card">
      <div className="card__block">
        <img className="card__img" src={img} alt={title} />
        <div className="card__badge">{`-${discount}%`}</div>
        <div className="card__box card__box-heart">
          <img
            className="card__heart"
            src="/img/icons/card-heart.svg"
            alt="heart"
          />
        </div>
        <div className="card__box card__box-eye">
          <img className="card__eye" src="/img/icons/card-eye.svg" alt="eye" />
        </div>
        <button className="card__button">
          <img
            className="card__button-img"
            src="/img/icons/card-cart.svg"
            alt="cart"
          />
          Add To Cart
        </button>
      </div>
      <a href="/#" className="card__title">
        {title}
      </a>
      <p className="card__price text-red">
        ${price}
        <span className="card__price_old">${price * (1 + discount / 100)}</span>
      </p>
      <div className="card__rating">
        <svg
          className="card__star_yellow"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
            fill="#FFAD33"
          />
        </svg>
        <svg
          className="card__star_yellow"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
            fill="#FFAD33"
          />
        </svg>
        <svg
          className="card__star_yellow"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
            fill="#FFAD33"
          />
        </svg>
        <svg
          className="card__star_half-filled"
          width="16"
          height="15"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99984 0.833349C8.75073 0.831514 8.50622 0.900384 8.29469 1.03196C8.08316 1.16354 7.9133 1.35242 7.80484 1.57668L5.95317 5.33002L1.80984 5.93168C1.56339 5.96719 1.33181 6.071 1.14133 6.23135C0.950845 6.3917 0.809065 6.60218 0.732047 6.83896C0.655029 7.07573 0.64585 7.32935 0.705549 7.57108C0.765249 7.8128 0.891441 8.03298 1.06984 8.20668L4.06984 11.1283L3.3615 15.255C3.31937 15.5001 3.34664 15.7522 3.44023 15.9826C3.53382 16.213 3.69 16.4127 3.89111 16.559C4.09223 16.7054 4.33027 16.7925 4.57833 16.8107C4.82639 16.8288 5.07457 16.7772 5.29484 16.6617L8.99984 14.7133V0.833349Z"
            fill="#FFAD33"
          />
          <path
            opacity="0.25"
            d="M9.00001 0.835954C9.24912 0.83404 9.50009 1.00001 9.50009 1.00001C9.50009 1.00001 10.0866 1.20807 10.195 1.44195L12.0467 5.35634L16.1901 5.98383C16.4366 6.02086 16.6682 6.12912 16.8587 6.29635C17.0492 6.46358 17.1909 6.68309 17.268 6.93003C17.345 7.17697 17.3542 7.44147 17.2945 7.69357C17.2347 7.94567 17.1086 8.1753 16.9302 8.35645L13.9301 11.4035L14.6384 15.7072C14.6806 15.9629 14.6533 16.2257 14.5597 16.466C14.4661 16.7064 14.3099 16.9146 14.1088 17.0672C13.9077 17.2198 13.6697 17.3107 13.4216 17.3296C13.1735 17.3486 12.9253 17.2947 12.7051 17.1743L9.00001 15.1423V0.835954Z"
            fill="black"
          />
        </svg>
        <svg
          className="card__star_grey"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.25"
            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
            fill="black"
          />
        </svg>
        <p className="card__rating-text">(75)</p>
      </div>
    </div>
  );
};

export default ProductCard;
