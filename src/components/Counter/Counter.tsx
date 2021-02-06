import { useContext } from "react";

import { IconButton, Image } from "../common";
import { MinusIcon, PlusIcon } from "../../assets";
import { ItemsContext, itemTypes } from "../../context/Items";

import {
  CountCountainer,
  CounterContainer,
  CounterWrapper,
} from "./Counter.styles";

interface IProps {
  id: number;
  quantity: number;
}

const Counter: React.FC<IProps> = ({ id, quantity }) => {
  const [_, itemsDispatch] = useContext(ItemsContext);

  const handleAddItem = (itemId: number) => {
    itemsDispatch({ type: itemTypes.ADD_ITEM, payload: itemId });
  };

  const handleSubtractItem = (itemId: number) => {
    itemsDispatch({ type: itemTypes.SUBTRACT_ITEM, payload: itemId });
  };

  return (
    <CounterWrapper>
      <CounterContainer>
        <IconButton width={20} onClick={() => handleSubtractItem(id)}>
          <Image src={MinusIcon} alt={"decrease"} />
        </IconButton>
        <CountCountainer>{quantity}</CountCountainer>
        <IconButton width={20} onClick={() => handleAddItem(id)}>
          <Image src={PlusIcon} alt={"increase"} />
        </IconButton>
      </CounterContainer>
    </CounterWrapper>
  );
};

export default Counter;
