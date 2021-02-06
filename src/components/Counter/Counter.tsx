import { MinusIcon, PlusIcon } from "../../assets";
import { IconButton, Image } from "../common";

import {
  CountCountainer,
  CounterContainer,
  CounterWrapper,
} from "./Counter.styles";

interface IProps {
  quantity: number;
}

const Counter: React.FC<IProps> = ({ quantity }) => {
  return (
    <CounterWrapper>
      <CounterContainer>
        <IconButton width={20}>
          <Image src={MinusIcon} alt={"decrease"} />
        </IconButton>
        <CountCountainer>{quantity}</CountCountainer>
        <IconButton width={20}>
          <Image src={PlusIcon} alt={"increase"} />
        </IconButton>
      </CounterContainer>
    </CounterWrapper>
  );
};

export default Counter;
