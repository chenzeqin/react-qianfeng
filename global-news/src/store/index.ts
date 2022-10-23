import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlicer';

// @reduxjs/toolkit 默认已经内置了 redux-thunk 第三方模块，支持异步action
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
