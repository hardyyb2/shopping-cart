import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { GlobalStyles } from "../styles";

import { LayoutContainer, LayoutWrapper } from "./Layout.styles";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  children?: ReactNode[] | ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <ToastContainer />
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
