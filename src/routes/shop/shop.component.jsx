import "./shop-styles.scss";
import CatalogPreview from "../preview-catalog/preview-catalog.component";
import FullCatalog from "../full-catalog/full-catalog.component";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { setCategories } from "../../redux-store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utilis/firebase/firebase-product.utilis";
import { useDispatch } from "react-redux";
///////////////////////////////
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CatalogPreview />} />
      <Route path=":catalog" element={<FullCatalog />} />
    </Routes>
  );
};

export default Shop;
