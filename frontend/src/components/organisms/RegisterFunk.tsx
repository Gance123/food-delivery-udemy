import React from "react";
import { RegisterCard } from "../molecules/RegisterCard";
import { registerUser } from "../../../lib/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userInfoState } from "../../store/UserInfo";
import { userAuthState } from "../../store/UserAuthState";
import router from "next/router";

export const RegisterFunk = () => {
  // Recoil
  const userInfo = useRecoilValue(userInfoState);
  const setUserAuth = useSetRecoilState(userAuthState);

  // 新規登録ボタン機能　from "lib/auth.js"
  const handleRegister = () => {
    registerUser(userInfo.username, userInfo.email, userInfo.password)
      .then((res) => {
        setUserAuth(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/");
  };

  return <RegisterCard onClick={handleRegister} />;
};
