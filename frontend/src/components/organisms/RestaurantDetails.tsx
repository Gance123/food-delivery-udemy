import { Col, Row } from "reactstrap";
import { useRouter } from "next/router";

import { DishCard } from "../molecules/DishCard";
import { ShopCart } from "../molecules/ShopCart";
// GraphQL
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const GET_RESTAURANT_DISHES = gql`
  query ($id: ID!) {
    # ”$idが必須”　の明示
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

  // Return
  if (error) return <h2>レストランは見つかりませんでした</h2>;
  if (loading) return <h2>読み込み中です。</h2>;
  if (data.restaurant.dishes && data.restaurant.dishes.length) {
    const { restaurant } = data;
    return (
      <>
        <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((dish: any) => (
            <DishCard
              key={dish.id}
              id={dish.id}
              name={dish.name}
              description={dish.description}
              image={dish.image.url}
              dish={dish}
            />
          ))}
          <div>
            <Col>
              <ShopCart />
            </Col>
          </div>
        </Row>
      </>
    );
  } else {
    return <h2>ページが見つかりません。</h2>;
  }
};
