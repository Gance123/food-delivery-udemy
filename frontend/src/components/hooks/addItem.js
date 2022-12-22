import { useState } from "react";

export const useAddItem = () => {
  const [state, setState] = useState({
    user: null,
    cart: { items: [], total: 0 },
  });

  // カートへの商品追加
  const addItem = (item) => {
    // 現在のカートのアイテム
    let { items } = state.cart;

    // これから追加するアイテム
    //現在のカートのアイテム(i)と、これから追加するアイテムが同じ
    // ・・・既存のアイテム
    const exsitingItem = items.find((i) => i.id === item.id);

    // 新しい商品を追加する場合
    if (!exsitingItem) {
      item.quantity = 1;
      setState({
        cart: {
          items: [...items, item],
          total: state.cart.total + item.price,
        },
      });
      () => Cookies.set("cart", state.cart.items);
    }
    // 既存の商品を追加する場合
    else {
      setState({
        cart: {
          items: state.cart.items.map((item) =>
            item.id === exsitingItem.id
              ? Object.assign({}, item, { quantity: item.quantity + 1 })
              : item
          ),
          total: state.cart.total + item.price,
        },
      });
      () => Cookies.set("cart", state.cart.items);
    }
  };

  return { state, setState, addItem };
};
