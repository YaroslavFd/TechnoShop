import './styles.css';

const CategoryCard = ({ name, href, svg }) => {
  return (
    <a className="category__block" href={href}>
      {svg}
      <p className="category__text">{name}</p>
    </a>
  );
};

export default CategoryCard;
