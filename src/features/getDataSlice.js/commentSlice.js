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

export const postCommentApi = createAsyncThunk(
  "Comment_API/Post_Comment",
  async (newComment) => {
    const response = await searchService.postComment("comment", newComment).catch(error => alert(error));
    console.log("response cmt:" ,response);
    return response;
  }
);

//crate slice
const getCommentApi = createSlice({
  name: "GET_Comment_API",
  initialState: {
    comment: {
      isErr: false,
      isLoading: true,
      comment: [],
      errMess: null,
    },
    newComment: {
      isErr: false,
      isLoading: false,
      errMess: null,
      comment: [],
    },
  },
  reducers: {},
  extraReducers: {
    [fetchComment.fulfilled]: (state, action) => {
      state.comment = {
        isErr: false,
        isLoading: false,
        errMess: null,
        comment: action.payload,
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

    //post commet
    [postCommentApi.pending]: (state, action) => {
      state.newComment = {
        isErr: false,
        isLoading: true,
        errMess: null,
        comment: [],
      };
    },
    [postCommentApi.fulfilled]: (state, action) => {
      state.newComment = {
        isErr: false,
        isLoading: false,
        errMess: null,
        comment:action.payload,
      };
    },
    [postCommentApi.rejected]: (state, action) => {
      state.newComment = {
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
