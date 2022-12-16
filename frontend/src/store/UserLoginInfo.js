import { atom } from "recoil";

export const userLoginInfoState = atom({
  key: "userLoginInfo",
  default: {
    identifier: null,
    password: null,
  },
});
