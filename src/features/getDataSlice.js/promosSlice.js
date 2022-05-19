import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchData = createAsyncThunk(
  "GetDataApi/fetchData",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    console.log("response", response);
    return response;
  }
);

//crate slice
const getDataApi = createSlice({
  name: "GetDataApi",
  initialState: {
    dishes: {
      isLoading: false,
      dishes: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.dishes = {
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    },
    [fetchData.pending]: (state, action) => {
      state.dishes = {
        isLoading: true,
        errMess: null,
        dishes: [],
      };
    },
    [fetchData.rejected]: (state, action) => {
      state.dishes = {
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getDataApiReducer } = getDataApi;
export default getDataApiReducer;
