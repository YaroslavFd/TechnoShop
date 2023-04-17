import './styles.css';

const LeftSitebar = () => {
  return (
    <aside>
      <nav className="menu">
        <ul className="menu__list text">
          <li className="menu__item menu__item_arrow">
            <a className="menu__link" href="/#">
              Woman’s Fashion
              <img src="/img/icons/menu-arrow.svg" alt="arrow" />
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Men’s Fashion
              <img src="/img/icons/menu-arrow.svg" alt="arrow" />
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Electronics
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Home & Lifestyle
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Medicine
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Sports & Outdoor
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Baby’s & Toys
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Groceries & Pets
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/#">
              Health & Beauty
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSitebar;
