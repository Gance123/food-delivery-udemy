import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { Nav, NavItem, Container } from "reactstrap";
import { useRecoilState } from "recoil";
import { userAuthState } from "../store/UserAuthState";

export const Layout = ({ children }) => {
  // // Recoil
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);

  // useEffect
  useEffect(() => {
    // すでにCookie情報が残っているか確認する
    const token = Cookies.get("token"); //tokenの中にはjwtが入っている
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
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

  return (
    <>
      <Head>
        <title>フードデリバリーサービス</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link href={"/"}>
              <a className="navbar-brand">ホーム</a>
            </Link>
          </NavItem>

          <NavItem className="ml-auto">
            {userAuth ? (
              <Link href={"/logout"}>
                <a className="nav-link">ログアウト</a>
              </Link>
            ) : (
              <Link href={"/login"}>
                <a className="nav-link">ログイン</a>
              </Link>
            )}
          </NavItem>

          <NavItem>
            {userAuth ? (
              <Link href={"/register"}>
                <a className="nav-link">{userAuth.username}</a>
              </Link>
            ) : (
              <Link href={"/register"}>
                <a className="nav-link">新規登録</a>
              </Link>
            )}
          </NavItem>
        </Nav>
      </header>
      <Container>{children}</Container>
    </>
  );
};
