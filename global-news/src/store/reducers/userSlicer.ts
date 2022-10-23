import { createSlice, SliceCaseReducers, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getToken } from '../../utils/auth';
import { Right } from '../../views/Permission/type';
import { User } from '../../views/User/type';

const jsonStr = localStorage.getItem('user');
let _user: Partial<User> = {
  id: 0,
  username: '',
  role: { rights: [] },
};
if (jsonStr) _user = JSON.parse(jsonStr);

interface UserState {
  loading: boolean;
  token: string | null;
  userInfo: Partial<User>;
  rightTree: Right[];
}
const initialState: UserState = {
  loading: false,
  token: getToken(),
  userInfo: _user
    ? _user
    : {
        id: 0,
        username: '',
        role: { rights: [] },
      },
  rightTree: [],
};

export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = action.payload;
    },
    setRightTree: (state, action: PayloadAction<Right[]>) => {
      state.rightTree = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
