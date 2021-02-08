import { IconButton, Image } from "../common";
import { MinusIcon, PlusIcon } from "../../assets/images";

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

enum ImageAltText {
  DECREASE = "decrease",
  INCREASE = "increase",
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
          <Image src={MinusIcon} alt={ImageAltText.DECREASE} />
        </IconButton>
        <CountCountainer>{quantity}</CountCountainer>
        <IconButton width={20} onClick={handleAddItem}>
          <Image src={PlusIcon} alt={ImageAltText.INCREASE} />
        </IconButton>
      </CounterContainer>
    </CounterWrapper>
  );
};

export default Counter;
