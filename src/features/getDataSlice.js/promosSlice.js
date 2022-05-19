import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchData = createAsyncThunk(
  "GETDATAAPI/FETCHDATA",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    return response;
  }
);

//crate slice
const getDataApi = createSlice({
  name: "GETDATAAPI",
  initialState: {
    promotions: {
      isLoading: false,
      promotions: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.promotions = {
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    },
    [fetchData.pending]: (state, action) => {
      state.promotions = {
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    },
    [fetchData.rejected]: (state, action) => {
      state.promotions = {
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getDataApiReducer } = getDataApi;
export default getDataApiReducer;
