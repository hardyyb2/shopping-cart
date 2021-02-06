import { ItemTile } from "../components";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <ItemTile
        imgSrc={"https://place-hold.it/40.jpg"}
        title={"HelldoHelldo"}
      />
    </AppWrapper>
  );
};

export default App;
