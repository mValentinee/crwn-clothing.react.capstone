import "./full-catalog.styles.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { SelectCategoriesData } from "../../redux-store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";

//////////////////////////

const FullCatalog = () => {
  const { catalog } = useParams();
  const categoriesMap = useSelector(SelectCategoriesData);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[catalog]);
  }, [catalog, categoriesMap]);

  return (
    <Fragment>
      <h2 className="catalog-title">{catalog.toUpperCase()}</h2>
      <div className="catalog-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default FullCatalog;
