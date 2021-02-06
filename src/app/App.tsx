import { Routes } from "../routes";
import { GlobalStyles } from "../styles";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Routes />
    </AppWrapper>
  );
};

export default App;
