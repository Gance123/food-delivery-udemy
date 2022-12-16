import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Nav, NavItem, Container } from "reactstrap";
import { useRecoilValue } from "recoil";
import { userAuthState } from "../store/UserAuthState";

export const Layout = ({ children }) => {
  // Recoil
  const userAuth = useRecoilValue(userAuthState);

  return (
    <>
      <div>
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
      </div>
    </>
  );
};
