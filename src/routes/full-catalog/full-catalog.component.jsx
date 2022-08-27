import "./full-catalog.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

//////////////////////////

const FullCatalog = () => {
  const { catalog } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[catalog]);
  }, [catalog, categoriesMap]);

  return (
    <Fragment>
      <h2 className='catalog-title'>{catalog.toUpperCase()}</h2>
      <div className='catalog-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default FullCatalog;
