import { createSlice } from "@reduxjs/toolkit";
import {COMMENTS} from '../shares/comments'
import {LEADERS} from '../shares/leaders'
import {PROMOTIONS} from '../shares/promotions'
import {DISHES} from '../shares/dishes'

const initialState = {
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    dishes: DISHES,
};

//create Slice
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducer: {},
});

//export action
 const {reducer: mainReducer} = mainSlice;
 export default mainReducer;
