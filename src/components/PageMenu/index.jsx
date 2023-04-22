import './styles.css';

const PageMenu = ({ items }) => {
  return (
    <div className="page-menu">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="./index.html">
            Home
          </a>
        </li>
        {items.map((item, i) => {
          const style =
            items.length - 1 === i
              ? 'breadcrumbs__link--active'
              : 'breadcrumbs__link';
          return (
            <li className="breadcrumbs__item" key={item.name}>
              <a className={style} href={item.src}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageMenu;
