import "./shop-styles.scss";
import CatalogPreview from "../preview-catalog/preview-catalog.component";
import FullCatalog from "../full-catalog/full-catalog.component";
import { Route, Routes } from "react-router-dom";
///////////////////////////////
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatalogPreview />} />
      <Route path=':catalog' element={<FullCatalog />} />
    </Routes>
  );
};

export default Shop;
