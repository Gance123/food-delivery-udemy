import React from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { Row } from "reactstrap";

import { inputState } from "../../store/InputState";
import { DishCard } from "../molecules/DishCard";

// GraphQL
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const GET_RESTAURANT_DISHES = gql`
  query ($id: ID!) {
    #１　”$idが必須”　の明示
    restaurant(id: $id) {
      # restaurant（１）対　dish(他)
      #$idを用いてレストラン特定 / id = router.query.id
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

// Type
type DetailInfo = {
  restaurant: {
    id: string;
    name: string;
    dishes: [
      {
        id: string;
        name: string;
        description: string;
        price: number;
        image: {
          url: string;
        };
      }
    ];
  };
};

// コンポーネント
export const RestaurantDetails = () => {
  // GraphQL
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
    // ➀ URLに含まれる?id=から始まるものを取得
    // ➁ GraphQlのrstaurant(id: 〇〇)の引数に設定される
    // クリック → URLに飛ぶ → URLの?id=の後にに続く値をもとにレストラン特定して表示
  });

  // Recoil
  const inputText = useRecoilValue(inputState);

  // Console
  console.log(data);

  // Return
  if (error) return <h2>レストランは見つかりませんでした</h2>;
  if (loading) return <h2>読み込み中です。</h2>;
  if (data.restaurant.dishes && data.restaurant.dishes.length) {
    // dataの中の特定したレストラン
    const { restaurant } = data;
    return (
      <>
        <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <DishCard
              key={res.id}
              id={res.id}
              name={res.name}
              description={res.description}
              image={res.image.url}
            />
          ))}
        </Row>
      </>
    );
  } else {
    return <h2>ページが見つかりません。</h2>;
  }
};
