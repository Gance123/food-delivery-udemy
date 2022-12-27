import Head from "next/head";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

import withData from "../../lib/apollo";
import { useManageItem } from "../components/hooks/useManageItem";
import AppContext from "../context/AppContext";

function App({ Component, pageProps }) {
  // hooks
  const { addItem, removeItem, state, setState } = useManageItem();

  // useEffect カート状態
  useEffect(() => {
    const cart = Cookies.get("cart");
    if (cart !== undefined) {
      JSON.parse(cart).forEach((item) => {
        setState({
          cart: {
            items: JSON.parse(cart),
            total: (state.cart.total += item.price * item.quantity),
          },
        });
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        addItem: addItem,
        removeItem: removeItem,
        cart: state.cart,
      }}
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
