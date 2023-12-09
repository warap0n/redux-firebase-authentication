import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducer from "./auth/user";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({ user: reducer });
const persistConfig = {
  key: "root", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
