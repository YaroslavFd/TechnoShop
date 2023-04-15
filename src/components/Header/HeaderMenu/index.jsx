import { Link, NavLink } from 'react-router-dom';

import './styles.css';

const HeaderMenu = () => {
  const activeStyle = (isActive) => {
    return { borderBottom: isActive ? '1px solid #7D8184' : '' };
  };

  return (
    <section className="header-menu">
      <div className="container header-menu__container">
        <Link className="header-menu__name" to="/">
          Exclusive
        </Link>
        <nav className="header-menu__menu">
          <ul className="header-menu__menu-list">
            <li className="header-menu__menu-item">
              <NavLink
                className="header-menu__menu-link"
                to="/"
                style={({ isActive }) => activeStyle(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink
                className="header-menu__menu-link"
                to="/contact"
                style={({ isActive }) => activeStyle(isActive)}
              >
                Contact
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink
                className="header-menu__menu-link"
                to="/about"
                style={({ isActive }) => activeStyle(isActive)}
              >
                About
              </NavLink>
            </li>
            <li className="header-menu__menu-item">
              <NavLink
                className="header-menu__menu-link"
                to="/sing-up"
                style={({ isActive }) => activeStyle(isActive)}
              >
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
            </a>
            <a href="/#" className="header-menu__icons-cart">
              <img src="/img/icons/cart-header.png" alt="cart" />
            </a>
            <a href="/#" className="header-menu__icons-user hidden">
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
