import { useContext, useEffect } from "react";

import { data } from "../bin";
import { DataProps } from "../utils";
import { ItemTable, OrderCard } from "../components";
import { ItemsContext, itemTypes } from "../context/Items";

import { HomeStyles } from "../styles";
const { HomeWrapper, HomeContainer } = HomeStyles;

const LOCALSTORAGE_ITEMS_KEY = "items";

const Home = () => {
  const [itemsState, itemsDispatch] = useContext(ItemsContext);

  const fetchAllItems = () => {
    return data;
  };

  const fetchCart = () => {
    const localItems = localStorage.getItem(LOCALSTORAGE_ITEMS_KEY);
    let items: null | DataProps[] = null;

    if (!localItems) {
      items = fetchAllItems();
      localStorage.setItem(LOCALSTORAGE_ITEMS_KEY, JSON.stringify(items));
    } else {
      items = JSON.parse(localItems);
    }

    return itemsDispatch({ type: itemTypes.SET_CART, payload: items });
  };

  useEffect(() => {
    if (!itemsState?.items) {
      fetchCart();
    }
  }, [itemsState.items]);

  return (
    <HomeWrapper>
      <HomeContainer>
        <ItemTable
          title={"Shopping Cart"}
          headers={["test"]}
          items={[
            {
              id: 9090,
              name: "Item1",
              price: 200,
              discount: 10,
              type: "fiction",
              img_url: "https://place-hold.it/40.jpg",
            },
          ]}
        />
        <OrderCard />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
