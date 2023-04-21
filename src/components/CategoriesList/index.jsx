import CategoryCard from '../CategoryCard';

import './styles.css';

const CategoriesList = ({ categories, slideRef }) => {
  return (
    <div className="category__box">
      {categories.map((category) => (
        <CategoryCard key={category.id} slideRef={slideRef} {...category} />
      ))}
    </div>
  );
};

export default CategoriesList;
