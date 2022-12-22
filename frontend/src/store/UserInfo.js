import { atom } from "recoil";

// 新規登録した際のusername, email, passwordを保持
export const userInfoState = atom({
  key: "userInfo",
  default: {
    username: null,
    email: null,
    password: null,
  },
});
