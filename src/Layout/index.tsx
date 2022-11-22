import { FC, ReactNode } from "react";
import Footer from "./Element/Footer";
import Header from "./Element/Header";
interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
