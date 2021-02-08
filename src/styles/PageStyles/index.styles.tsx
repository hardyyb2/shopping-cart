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
  flex-direction: column;
  width: 100%;
`;

const HomeStyles = {
  HomeWrapper,
  HomeContainer,
  RestoreButtonContainer,
  FlexContainer,
};

export default HomeStyles;
