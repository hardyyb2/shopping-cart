import { ItemTile } from "../components";
import { GlobalStyles } from "../styles";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ItemTile
        imgSrc={"https://place-hold.it/40.jpg"}
        title={"HelldoHelldo"}
      />
    </AppWrapper>
  );
};

export default App;
