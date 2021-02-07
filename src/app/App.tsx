import { Layout } from "../layout";
import { Routes } from "../routes";

import { AppWrapper } from "./App.styles";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <Layout>
        <Routes />
      </Layout>
    </AppWrapper>
  );
};

export default App;
