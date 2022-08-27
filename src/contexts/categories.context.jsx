import { createContext, useState, useEffect } from "react";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "../utilis/firebase/firebase-product.utilis.js";
import SHOP_DATA from "../shop-data";
//////////////////////////////////////////

export const CategoriesContext = createContext({
  categoriesMap: {},
  // setProduct: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
