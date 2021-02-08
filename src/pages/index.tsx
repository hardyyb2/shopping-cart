import { useContext, useEffect } from "react";

import { ItemTable, OrderCard, RestoreButton } from "../components";
import {
  calculateTotalPriceAndItems,
  DataProps,
  getFromLocalStorage,
  ItemTableHeaders,
  saveToLocalStorage,
} from "../utils";
import { ItemsContext, itemTypes, ITEMS_KEY } from "../context/Items";
import { data } from "../bin";

import { HomeStyles } from "../styles";
const { HomeWrapper, HomeContainer, RestoreButtonContainer } = HomeStyles;

const TABLE_HEADER = "Shopping Cart";

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
        <RestoreButtonContainer>
          <RestoreButton onClick={handleRestoreItems} />
        </RestoreButtonContainer>
        <OrderCard />
        <ItemTable
          title={TABLE_HEADER}
          headers={ItemTableHeaders}
          items={itemsState.items}
        />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
