import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";
import getDataApiReducer from "../features/getDataSlice.js/promosSlice";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../Components/forms";
import { combineReducers } from "redux";
import getDishesReducer from "../features/getDataSlice.js/dishesSlice";
import getLeaderReducer from "../features/getDataSlice.js/leaderSlice";
import logger from "redux-logger";

const rootReducer = combineReducers({
  main: mainReducer,
  getData: getDataApiReducer,
  getDishes: getDishesReducer,
  getLeader: getLeaderReducer,
  ...createForms({
    feedback: InitialFeedback,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(logger),
});
