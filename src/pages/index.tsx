import { useContext, useEffect } from "react";

import { data } from "../bin";
import { calculateTotalPriceAndItems, DataProps } from "../utils";
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
    let items: DataProps[] | [] = [];

    if (!localItems) {
      items = fetchAllItems();
      localStorage.setItem(LOCALSTORAGE_ITEMS_KEY, JSON.stringify(items));
    } else {
      items = JSON.parse(localItems);
    }

    let { totalItems, totalPrice } = calculateTotalPriceAndItems(items);

    return itemsDispatch({
      type: itemTypes.SET_CART,
      payload: { items, totalPrice, totalItems },
    });
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
          items={itemsState.items}
        />
        <OrderCard />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
