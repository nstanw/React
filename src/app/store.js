import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";
import getDataApiReducer from "../features/getDataSlice.js/promosSlice";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../Components/forms";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  main: mainReducer,
  getData: getDataApiReducer,
  ...createForms({
    feedback: InitialFeedback,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
