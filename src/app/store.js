import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../Components/forms";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  main: mainReducer,
  ...createForms({
    feedback: InitialFeedback,
  }),
});

export const store = configureStore({
  reducer: rootReducer,
});
