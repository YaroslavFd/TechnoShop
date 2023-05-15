import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import './styles.css';

const HeaderMenu = () => {
  const productsFavorites = useSelector((state) => state.favorites.products);
  const productsCart = useSelector((state) => state.cart.products);
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
            <Link className="header-menu__icons-heart" to="/favorites">
              <img src="/img/icons/heart-header.png" alt="heart" />
              {productsFavorites.length > 0 && (
                <span className="product-counter">
                  {productsFavorites.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="header-menu__icons-cart">
              <img src="/img/icons/cart-header.png" alt="cart" />
              {productsCart.length > 0 && (
                <span className="product-counter">{productsCart.length}</span>
              )}
            </Link>
            <Link className="header-menu__icons-user" to="/account">
              <img src="/img/icons/user.png" alt="user" />
            </Link>
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
