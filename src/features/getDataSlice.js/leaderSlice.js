import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as searchService from "../../apiServices/searchService";

//crate thunk
export const fetchLeader = createAsyncThunk(
  "GETDATAAPI/FETCHLEADER",
  async (params, { rejectWithValue }) => {
    const result = await searchService.search(params);
    return result;
  }
);

//crate slice
const getDataApi = createSlice({
  name: "GETDATAAPI",
  initialState: {
    leader: {
      isErr: true,
      isLoading: false,
      leader: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchLeader.fulfilled]: (state, action) => {
      state.leader = {
        isErr: false,
        isLoading: false,
        errMess: null,
        leader: action.payload,
      };
    },
    [fetchLeader.pending]: (state, action) => {
      state.leader = {
        isErr: false,
        isLoading: true,
        errMess: null,
        leader: [],
      };
    },
    [fetchLeader.rejected]: (state, action) => {
      state.leader = {
        isErr: true,
        isLoading: false,
        errMess: action.error.message,
      };
    },
  },
});

//export
export const { reducer: getLeaderReducer } = getDataApi;
export default getLeaderReducer;
