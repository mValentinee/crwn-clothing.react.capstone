import "./directory.styles.scss";
import CategoryItems from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
