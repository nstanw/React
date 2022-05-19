import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchComment = createAsyncThunk(
  "GET_Comment_API/FETCH_Comment",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    return response;
  }
);

//crate slice
const getCommentApi = createSlice({
  name: "GET_CommentAPI",
  initialState: {
    comment: {
      isLoading: true,
      comment: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchComment.fulfilled]: (state, action) => {
      state.comment = {
        isLoading: false,
        errMess: null,
        comment: {
          ...action.payload,
          id: action.payload.length,
          date: new Date().toISOString(),
        },
      };
    },
    [fetchComment.pending]: (state, action) => {
      state.comment = {
        isLoading: true,
        errMess: null,
        comment: [],
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
