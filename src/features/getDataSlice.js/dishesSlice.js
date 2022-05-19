import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchDishes = createAsyncThunk(
  "GET_DISHES_API/FETCH_DISHES",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    return response;
  }
);

//crate slice
const getDishes = createSlice({
  name: "GET_DISHES_API",
  initialState: {
    dishes: {
      isLoading: false,
      dishes: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchDishes.fulfilled]: (state, action) => {
      state.dishes = {
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    },
    [fetchDishes.pending]: (state, action) => {
      state.dishes = {
        isLoading: true,
        errMess: null,
        dishes: [],
      };
    },
    [fetchDishes.rejected]: (state, action) => {
      state.dishes = {
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getDishesReducer } = getDishes;
export default getDishesReducer;
