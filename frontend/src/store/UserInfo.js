import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: {
    username: null,
    email: null,
    password: null,
  },
});
