import { NavLink } from 'react-router-dom';

import './styles.css';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="page-menu">
      <ul className="breadcrumbs">
        {items.map((item) => {
          return (
            <li className="breadcrumbs__item" key={item.name}>
              <NavLink to={item.src} className="breadcrumbs__link">
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
