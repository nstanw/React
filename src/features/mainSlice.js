import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {COMMENTS} from '../shares/comments'
import {LEADERS} from '../shares/leaders'
import {PROMOTIONS} from '../shares/promotions'
import {DISHES} from '../shares/dishes'

//create ThunkAsync
//Fake Api
const addDishesApi = {
  addDishes: ()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(DISHES)
      }, 2000)
    })
  }
}
//create thunk
export const getDishesThunk = createAsyncThunk(
  "main/getDishesThunk",
  async (params, thunkApi)=>{
    // thunkApi.dispatch(...)
    const CurrentDish = await addDishesApi.addDishes();
    return CurrentDish;
  }
);


const initialState = {
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    dishes: DISHES,
    status: {
      isLoading: true,
      errMess: null,
      dishes: [],
    }
};

//create Slice
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addComment:(state, action)=>{
      state.comments = state.comments.concat(action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(getDishesThunk.pending, (state,action)=>{
      state.status.dishes = [];
      state.status.errMess = null;
      state.status.isLoading = true;
    });

      //requst thanh cong
      builder.addCase(getDishesThunk.fulfilled, (state, action) => {
        (state.status.dishes = action.payload);
        (state.status.errMess = null);
        state.status.isLoading = false;
      });

      //request that bai
      builder.addCase(getDishesThunk.rejected, (state, action) => {
        state.status.errMess = action.payload;
        state.status.isLoading = false;
      });
  }
});

//export action
 const {reducer: mainReducer} = mainSlice;
 export const { addComment } = mainSlice.actions;
 export default mainReducer;
