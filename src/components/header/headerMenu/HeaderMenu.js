import './headerMenu.css';

const HeaderMenu = () => {
  return (
    <section className="header-menu">
      <div className="container header-menu__container">
        <a className="header-menu__name" href="#">
          Exclusive
        </a>
        <nav className="header-menu__menu">
          <ul className="header-menu__menu-list">
            <li className="header-menu__menu-item">
              <a className="header-menu__menu-link" href="#">
                Home
              </a>
            </li>
            <li className="header-menu__menu-item">
              <a className="header-menu__menu-link" href=".#">
                Contact
              </a>
            </li>
            <li className="header-menu__menu-item">
              <a className="header-menu__menu-link" href="#">
                About
              </a>
            </li>
            <li className="header-menu__menu-item">
              <a className="header-menu__menu-link" href="#">
                Sign Up
              </a>
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
            <a href="#" className="header-menu__icons-heart">
              <img src="/img/icons/heart-header.png" alt="heart" />
            </a>
            <a href="#" className="header-menu__icons-cart">
              <img src="/img/icons/cart-header.png" alt="cart" />
            </a>
            <a href="#" className="header-menu__icons-user hidden">
              <img src="/img/icons/user.png" alt="user" />
            </a>
          </div>
        </div>
        <div className="dropdown hidden">
          <a className="dropdown__link" href="#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-user.svg"
              alt="user"
            />
            Manage My Account
          </a>
          <a className="dropdown__link" href="#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-order.svg"
              alt="user"
            />
            My Order
          </a>
          <a className="dropdown__link" href="#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-cancellations.svg"
              alt="user"
            />
            My Cancellations
          </a>
          <a className="dropdown__link" href="#">
            <img
              className="dropdown__img"
              src="/img/icons/dropdown-reviews.svg"
              alt="user"
            />
            My Reviews
          </a>
          <a className="dropdown__link" href="#">
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
