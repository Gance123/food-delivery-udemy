import React from "react";
import { Row } from "reactstrap";
import { useRecoilValue } from "recoil";

import { RestaurantCard } from "../molecules/RestaurantCard";
import { inputState } from "../../store/InputState";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

type Res = {
  id: string;
  name: string;
  description: string;
  image: [{ url: string }];
};

export const RestaurantList = () => {
  // GraphQL
  const { loading, error, data } = useQuery(query);

  // Recoil
  const inputText: any = useRecoilValue(inputState);

  // Return
  if (error) return <h2>レストランは見つかりませんでした</h2>;
  if (loading) return <h2>読み込み中です。</h2>;
  if (data.restaurants && data.restaurants.length) {
    // 検索機能 with Recoil
    const searchQuery = data.restaurants.filter((res: Res) =>
      res.name.toLowerCase().includes(inputText)
    );

    return (
      <Row>
        {searchQuery.map((res: Res) => (
          <RestaurantCard
            key={res.id}
            id={res.id}
            name={res.name}
            description={res.description}
            image={res.image[0].url}
          />
        ))}
      </Row>
    );
  } else {
    return <h2>ページが見つかりません。</h2>;
  }
};
