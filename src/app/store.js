import { configureStore } from '@reduxjs/toolkit';
import addCommentRuducer from '../features/comment/commentSilce';
export const store = configureStore({
    reducer: {
        addComment: addCommentRuducer,
    }
})