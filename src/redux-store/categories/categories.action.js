import { CATEGORIES_ACTION_TYPE } from "./categories.types";
//import { createAction } from "@reduxjs/toolkit";
import { createAction } from "../../utilis/firebase/reducer/reducer.utils";
///////////////////////////////////////

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
