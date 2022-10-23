import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlicer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'user',
  storage,
  whitelist:['token'] // user.token
};

// @reduxjs/toolkit 默认已经内置了 redux-thunk 第三方模块，支持异步action
const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),  // 单独设置userReducer持久化
    // other reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store)