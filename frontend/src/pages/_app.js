import React from "react";
import App from "next/app";
import Head from "next/head";
import withData from "../../lib/apollo";

import { RecoilRoot } from "recoil";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          />
        </Head>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </>
    );
  }
}

export default withData(MyApp);
// MyApp ... frontendのすべてのコンポーネント
// withData(config)ですべてのコンポーネントでapolloのサーバを利用できる
// ・・・どこでもデータ取得が可能！！！
