import { createSelector } from "@reduxjs/toolkit";
//////////////////////////////////////

// selector is finding the information for the state through the categoryReducer
const selectCategoriesFromStateObject = (state) => state.categories;

const selectCategoriesArray = createSelector(
  [selectCategoriesFromStateObject],
  (categoriesSlice) => categoriesSlice.categories
);

export const SelectCategoriesData = createSelector(
  [selectCategoriesArray],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
