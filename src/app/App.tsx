import { ItemTable } from "../components";
import { GlobalStyles } from "../styles";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ItemTable
        title={"Shopping Cart"}
        headers={["test"]}
        items={[
          {
            id: 9090,
            name: "Item1",
            price: 200,
            discount: 10,
            type: "fiction",
            img_url: "https://place-hold.it/40.jpg",
          },
        ]}
      />
    </AppWrapper>
  );
};

export default App;
