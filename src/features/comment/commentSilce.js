import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../shared/comments";

const initialState = {
  comments: COMMENTS,
};

//createSlice Comment
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state , action) => {
      console.log("initialState Slice", initialState);
      console.log("concat", state.comments.concat(action.payload));

      return (state = state.comments.concat(action.payload));
    },
  },
});

// export reducer, action
export const { addComment } = commentSlice.actions;

const addCommentRuducer = commentSlice.reducer;
export default addCommentRuducer;
