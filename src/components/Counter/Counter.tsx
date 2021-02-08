import { IconButton, Image } from "../common";
import { MinusIcon, PlusIcon } from "../../assets";

import {
  CountCountainer,
  CounterContainer,
  CounterWrapper,
} from "./Counter.styles";

interface IProps {
  quantity: number;
  handleAddItem: () => void;
  handleSubtractItem: () => void;
}

const Counter: React.FC<IProps> = ({
  quantity,
  handleAddItem,
  handleSubtractItem,
}) => {
  return (
    <CounterWrapper>
      <CounterContainer>
        <IconButton
          width={20}
          disabled={!quantity}
          onClick={handleSubtractItem}
        >
          <Image src={MinusIcon} alt={"decrease"} />
        </IconButton>
        <CountCountainer>{quantity}</CountCountainer>
        <IconButton width={20} onClick={handleAddItem}>
          <Image src={PlusIcon} alt={"increase"} />
        </IconButton>
      </CounterContainer>
    </CounterWrapper>
  );
};

export default Counter;
