import { ToastContainer } from "react-toastify";

import { Routes } from "../routes";
import { GlobalStyles } from "../styles";

import { AppWrapper } from "./App.styles";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC<{}> = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ToastContainer />
      <Routes />
    </AppWrapper>
  );
};

export default App;
