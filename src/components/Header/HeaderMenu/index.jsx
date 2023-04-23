import { Link, NavLink } from 'react-router-dom';

import './styles.css';

const HeaderMenu = () => {
  return (
    <section className="header-menu">
      <div className="container header-menu__container">
        <Link className="header-menu__name" to="/">
          Exclusive
        </Link>
        <nav className="header-menu__menu">
          <ul className="header-menu__menu-list">
            <li className="header-menu__menu-item">
              <NavLink className="header-menu__menu-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink className="header-menu__menu-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink className="header-menu__menu-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink className="header-menu__menu-link" to="/sing-up">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-menu__block-user">
          <div className="header-menu__inputs">
            <input
              className="header-menu__input"
              type="text"
              name="input-search"
              placeholder="What are you looking for?"
            />
            <input className="header-menu__input-loupe" readOnly />
          </div>
          <div className="header-menu__icons">
            <a href="/#" className="header-menu__icons-heart">
              <img src="/img/icons/heart-header.png" alt="heart" />
              <span className="product-counter">4</span>
            </a>
            <NavLink to="/cart" className="header-menu__icons-cart">
              <img src="/img/icons/cart-header.png" alt="cart" />
              <span className="product-counter">2</span>
            </NavLink>
            <a href="/#" className="header-menu__icons-user">
              <img src="/img/icons/user.png" alt="user" />
            </a>
          </div>
        </div>
        <div className="dropdown hidden">
          <a className="dropdown__link" href="/#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-user.svg"
              alt="user"
            />
            Manage My Account
          </a>
          <a className="dropdown__link" href="/#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-order.svg"
              alt="user"
            />
            My Order
          </a>
          <a className="dropdown__link" href="/#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-cancellations.svg"
              alt="user"
            />
            My Cancellations
          </a>
          <a className="dropdown__link" href="/#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-reviews.svg"
              alt="user"
            />
            My Reviews
          </a>
          <a className="dropdown__link" href="/#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-logout.svg"
              alt="user"
            />
            Logout
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderMenu;
