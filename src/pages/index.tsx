import { useContext, useEffect } from "react";

import { ItemTable, OrderCard, RestoreButton } from "../components";
import {
  calculateTotalPriceAndItems,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/functions";
import { DataProps } from "../utils/types";

import { ItemsContext, itemTypes, ITEMS_KEY } from "../context/Items";
import { itemData } from "../bin/data";

import { HomeStyles } from "../styles/PageStyles";

const {
  HomeWrapper,
  HomeContainer,
  RestoreButtonContainer,
  FlexContainer,
} = HomeStyles;

enum TableHeaders {
  ITEMS = "Items",
  QUANTITY = "Quantity",
  PRICE = "Price",
}

const ItemTableHeaders = [
  TableHeaders.ITEMS,
  TableHeaders.QUANTITY,
  TableHeaders.PRICE,
];

const TABLE_TITLE = "Shopping Cart";

const Home = () => {
  const [itemsState, itemsDispatch] = useContext(ItemsContext);

  const fetchAllItems = () => {
    return itemData;
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
        <FlexContainer>
          <OrderCard />
          <ItemTable
            title={TABLE_TITLE}
            headers={ItemTableHeaders}
            items={itemsState.items}
          />
        </FlexContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
