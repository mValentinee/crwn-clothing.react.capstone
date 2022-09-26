// import { createAction } from "@reduxjs/toolkit";
import { createAction } from "../../utilis/firebase/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
///////////////////

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
