import CategoryCard from '../CategoryCard';

import './styles.css';

const CategoriesList = ({ categories }) => {
  return (
    <div className="category__box">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoriesList;
