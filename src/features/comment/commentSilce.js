import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../shared/comments";

const initialState = {
  comments: COMMENTS,
};
// e ket noi lai voi a e nhe
//createSlice Comment
export const commentSlice = createSlice({
  name: "commentName",
  initialState,
  reducers: {
    addComment: (state , action) => {
        console.log('state',  state.comments)
       state.comments =  state.comments.concat(action.payload);
    },
  },
});

// export reducer, action
export const { addComment } = commentSlice.actions;

const addCommentRuducer = commentSlice.reducer;
export default addCommentRuducer;
