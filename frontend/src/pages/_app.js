import Head from "next/head";
import { RecoilRoot } from "recoil";

import withData from "../../lib/apollo";
import AppContext from "../context/AppContext";
import { useAddItem } from "../components/hooks/addItem";

function App({ Component, pageProps }) {
  // hooks
  const { addItem, state, setState } = useAddItem();

  return (
    <AppContext.Provider
      value={{ addItem: addItem, cart: state.cart, setState: setState }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AppContext.Provider>
  );
}

export default withData(App);
// MyApp ... frontendのすべてのコンポーネント
// withData(config)ですべてのコンポーネントでapolloのサーバを利用できる
// ・・・どこでもデータ取得が可能！！！
