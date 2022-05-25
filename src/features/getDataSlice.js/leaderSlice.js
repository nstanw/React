import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchByParams } from "../../userApi/fetchByParams";
import { baseUrl } from "../baseUrl";

//crate thunk
export const fetchLeader = createAsyncThunk(
  "GETDATAAPI/FETCHLEADER",
  async (params, { rejectWithValue }) => {
    try {
      const response = fetch(baseUrl + "params").then((res) => res.json());
      console.log("response", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.console());
    }
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
        errMess: action.payload,
      };
    },
  },
});

//export
export const { reducer: getLeaderReducer } = getDataApi;
export default getLeaderReducer;
