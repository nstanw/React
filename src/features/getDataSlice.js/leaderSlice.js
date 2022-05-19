import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";

//crate thunk
export const fetchLeader = createAsyncThunk(
  "GETDATAAPI/FETCHLEADER",
  async (params, thunkApi) => {
    const response = await fetchByParams(params);
    return response;
  }
);

//crate slice
const getDataApi = createSlice({
  name: "GETDATAAPI",
  initialState: {
    leader: {
      isLoading: false,
      leader: [],
      errMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [fetchLeader.fulfilled]: (state, action) => {
      state.leader = {
        isLoading: false,
        errMess: null,
        leader: action.payload,
      };
    },
    [fetchLeader.pending]: (state, action) => {
      state.leader = {
        isLoading: true,
        errMess: null,
        leader: [],
      };
    },
    [fetchLeader.rejected]: (state, action) => {
      state.leader = {
        isLoading: false,
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getLeaderReducer } = getDataApi;
export default getLeaderReducer;
