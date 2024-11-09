import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { userDataType } from "./../../types/types";

interface stateTypes {
  userInfo: userDataType | null;
  userAllPosts: any[] | null;
  userPost: any;
}

const initialState: stateTypes = {
  userInfo: null,
  userAllPosts: [],
  userPost: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<stateTypes["userInfo"]>) => {
      state.userInfo = action.payload;
    },
    clearUserInfo:(state)=>{
      state.userInfo = null
    }
  },
});

export const { setUserInfo,clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
