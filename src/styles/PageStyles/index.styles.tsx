import styled from "styled-components";

import { Flex } from "../../components/common";

const HomeWrapper = styled.div`
  width: 100%;
`;

const HomeContainer = styled.div`
  width: 100%;
`;

const RestoreButtonContainer = styled.div`
  margin: calc(var(--size) * 2);
`;

const FlexContainer = styled(Flex)`
  width: 100%;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HomeStyles = {
  HomeWrapper,
  HomeContainer,
  RestoreButtonContainer,
  FlexContainer,
};

export default HomeStyles;
