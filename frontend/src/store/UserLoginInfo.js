import { atom } from "recoil";

// ログインした際のidentifier(email), passwordを保持
export const userLoginInfoState = atom({
  key: "userLoginInfo",
  default: {
    identifier: null,
    password: null,
  },
});
