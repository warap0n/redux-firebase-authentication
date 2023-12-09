import { createSlice } from "@reduxjs/toolkit";

interface InitialUserState {
  user: null | {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
  };
}

const initialState: InitialUserState = {
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { type, payload }) {
      state.user = payload;
    },
    logout(state, { type, payload }) {
      state.user = null;
    },
  },
});

const { login, logout } = user.actions;

export { login, logout };
export default user.reducer;
