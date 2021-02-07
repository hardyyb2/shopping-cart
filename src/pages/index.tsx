import { useContext, useEffect } from "react";

import { data } from "../bin";
import {
  calculateTotalPriceAndItems,
  DataProps,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils";
import { ItemTable, OrderCard, RestoreButton } from "../components";
import { ItemsContext, itemTypes, ITEMS_KEY } from "../context/Items";

import { HomeStyles } from "../styles";
const { HomeWrapper, HomeContainer } = HomeStyles;

const LOCALSTORAGE_ITEMS_KEY = "items";

const Home = () => {
  const [itemsState, itemsDispatch] = useContext(ItemsContext);

  const fetchAllItems = () => {
    return data;
  };

  const fetchCart = () => {
    const localItems = getFromLocalStorage(ITEMS_KEY);
    let items: DataProps[] | [] = [];

    if (!localItems) {
      items = fetchAllItems();
      saveToLocalStorage(ITEMS_KEY, items);
    } else {
      items = localItems;
    }

    let priceAndItems = calculateTotalPriceAndItems(items);

    return itemsDispatch({
      type: itemTypes.SET_CART,
      payload: {
        items,
        ...priceAndItems,
      },
    });
  };

  useEffect(() => {
    if (!itemsState?.items) {
      fetchCart();
    }
  }, []);

  const handleRestoreItems = () => {
    itemsDispatch({ type: itemTypes.RESTORE_ITEMS });
  };

  return (
    <HomeWrapper>
      <HomeContainer>
        <ItemTable
          title={"Shopping Cart"}
          headers={["test"]}
          items={itemsState.items}
        />
        <OrderCard />
        <RestoreButton onClick={handleRestoreItems} />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
