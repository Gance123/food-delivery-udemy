import React, { useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import withData from "../../lib/apollo";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { userAuthState } from "../store/UserAuthState";

function App({ Component, pageProps }) {
  

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

export default withData(App);
// MyApp ... frontendのすべてのコンポーネント
// withData(config)ですべてのコンポーネントでapolloのサーバを利用できる
// ・・・どこでもデータ取得が可能！！！
