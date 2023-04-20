import './styles.css';

const CategoryCard = ({ slideRef, name, href, svg }) => {
  return (
    <a className="category__block" href={href} ref={slideRef}>
      {svg}
      <p className="category__text">{name}</p>
    </a>
  );
};

export default CategoryCard;
