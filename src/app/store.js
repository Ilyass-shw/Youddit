import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
