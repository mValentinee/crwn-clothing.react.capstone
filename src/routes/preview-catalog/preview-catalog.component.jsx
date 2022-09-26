import { Fragment } from "react";
import CategoryPreview from "../../components/preview-category/preview-category.component";
import { useSelector } from "react-redux";
import { SelectCategoriesData } from "../../redux-store/categories/categories.selector";
///////////////////////////////
const CatalogPreview = () => {
  const categoriesMap = useSelector(SelectCategoriesData);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CatalogPreview;
