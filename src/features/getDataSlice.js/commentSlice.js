import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as searchService from "../../apiServices/searchService";

//crate thunk
export const fetchComment = createAsyncThunk(
  "GET_Comment_API/FETCH_Comment",
  async (params, thunkApi) => {
    const response = await searchService.search(params);
    return response;
  }
);

//crate slice
const getCommentApi = createSlice({
  name: "GET_CommentAPI",
  initialState: {
    comment: {
      isErr: false,
      isLoading: true,
      comment: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchComment.fulfilled]: (state, action) => {
      state.comment = {
        isErr: false,
        isLoading: false,
        errMess: null,
        comment:action.payload,
      };
    },
    [fetchComment.pending]: (state, action) => {
      state.comment = {
        isErr: false,
        isLoading: true,
        errMess: null,
        comment: [],
      };
    },
    [fetchComment.rejected]: (state, action) => {
      state.comment = {
        isErr: true,
        isLoading: false,
        errMess: action.error.message,
      };
    },
  },
});

//export
export const { reducer: getCommentApiReducer } = getCommentApi;
export default getCommentApiReducer;
