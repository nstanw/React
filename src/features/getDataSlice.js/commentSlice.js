import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchComment = createAsyncThunk(
  "GETCommentAPI/FETCHComment",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    return response;
  }
);

//crate slice
const getCommentApi = createSlice({
  name: "GETCommentAPI",
  initialState: {
    promotions: {
      isLoading: false,
      promotions: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchComment.fulfilled]: (state, action) => {
      state.promotions = {
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    },
    [fetchComment.pending]: (state, action) => {
      state.promotions = {
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    },
    [fetchComment.rejected]: (state, action) => {
      state.promotions = {
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getCommentApiReducer } = getCommentApi;
export default getCommentApiReducer;
