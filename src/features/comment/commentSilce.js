import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../shared/comments";

//khao bao state
const initialState = {
  comments: COMMENTS,
};

//createSlice Comment
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      //add new comment to state.comment
      var comment = action.payload;
      // add arr to state
      const newstate = state.comments.concat(comment);
      console.log("new state in file slice",newstate)
     return newstate
    },
  },
});

// export reducer, action
export const { addComment } = commentSlice.actions;

const addCommentRuducer = commentSlice.reducer;
export default addCommentRuducer;
