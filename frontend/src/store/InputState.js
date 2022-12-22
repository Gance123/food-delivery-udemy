import { atom } from "recoil";

// 検索欄の入力状態を保持
export const inputState = atom({
  key: "inputState",
  inputText: " ",
});
