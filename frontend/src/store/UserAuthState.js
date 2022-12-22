import { atom } from "recoil";

// Layoutのヘッダーなど、ログイン状態を保持
export const userAuthState = atom({
  key: "userAuth",
  default: null,
});
