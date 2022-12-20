import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HomeTemplate } from "../components/templates/HomeTemplate";
import { userAuthState } from "../store/UserAuthState";
import Cookies from "js-cookie";

export default function index() {
  // Recoil
  const setUserAuth = useSetRecoilState(userAuthState);

  useEffect(() => {
    // すでにCookie情報が残っているか確認する
    const token = Cookies.get("token"); //tokenの中にはjwtが入っている
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (!res.ok) {
          Cookies.remove("token");
          setUserAuth({ user: null });
          return null;
        }
        const user = await res.json();
        setUserAuth(user); //ログイン
      });
    }
  }, []);
  return <HomeTemplate />;
}
