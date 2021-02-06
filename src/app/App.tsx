import { ItemGroup } from "../components";
import { GlobalStyles } from "../styles";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ItemGroup
        imgSrc={"https://place-hold.it/40.jpg"}
        title={"HelldoHelldo"}
        price={10}
        quantity={10}
      />
    </AppWrapper>
  );
};

export default App;
