import React from "react";
import { RegisterCard } from "../molecules/RegisterCard";
import { registerUser } from "../../../lib/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userInfoState } from "../../store/UserInfo";
import { userAuthState } from "../../store/UserAuthState";
import router, { useRouter } from "next/router";

export const RegisterFunk = () => {
  const navigate = useRouter();

  // Recoil
  const userInfo = useRecoilValue(userInfoState);
  const setUserAuth = useSetRecoilState(userAuthState);

  // 登録ボタン機能　from "lib/auth.js"
  const handleRegister = () => {
    registerUser(userInfo.username, userInfo.email, userInfo.password)
      .then((res) => {
        setUserAuth({ ...userInfo });
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/");
  };

  return <RegisterCard onClick={handleRegister} />;
};
