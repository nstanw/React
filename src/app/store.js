import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger"
import mainReducer from '../features/mainSlice'

export const store = configureStore({
  reducer: {
      main: mainReducer,
      // middleware:[...getDefaultMiddleware(),createLogger] ,
      }
});
