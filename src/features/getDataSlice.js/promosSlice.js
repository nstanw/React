import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as searchService from "../../apiServices/searchService";

//crate thunk
export const fetchData = createAsyncThunk(
  "GETDATAAPI/FETCHDATA",
  async (params, thunkApi) => {
    const response = await searchService.search(params);
    return response;
  }
);

//crate slice
const getDataApi = createSlice({
  name: "GETDATAAPI",
  initialState: {
    promotions: {
      isErr: true,
      isLoading: false,
      promotions: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.promotions = {
        isErr: false,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    },
    [fetchData.pending]: (state, action) => {
      state.promotions = {
        isErr: false,
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    },
    [fetchData.rejected]: (state, action) => {
      state.promotions = {
        isErr: true,
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getDataApiReducer } = getDataApi;
export default getDataApiReducer;
