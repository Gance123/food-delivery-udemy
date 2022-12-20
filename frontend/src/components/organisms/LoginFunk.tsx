import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { login } from "../../../lib/auth";
import { userAuthState } from "../../store/UserAuthState";
import { userLoginInfoState } from "../../store/UserLoginInfo";
import { LoginCard } from "../molecules/LoginCard";

export const LoginFunk = () => {
  // Recoil
  const userLoginInfo = useRecoilValue(userLoginInfoState);
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);

  // ログインボタン
  const handleLogin = () => {
    login(userLoginInfo.identifier, userLoginInfo.password)
      .then((res) => {
        // console.log(res.data.user)
        setUserAuth(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(userAuth);

  return <LoginCard onClick={handleLogin} />;
};
