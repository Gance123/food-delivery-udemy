import React from "react";
import { Layout } from "../../layout/Layout";
import { SearchInput } from "../molecules/SearchInput";
import { RestaurantList } from "../organisms/RestaurantList";

export const HomeTemplate = () => {
  return (
    <Layout>
      <SearchInput />
      <RestaurantList />
    </Layout>
  );
};
