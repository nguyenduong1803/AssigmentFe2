import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/Atom/ScrollToTop/ScrollToTop";
import Routers from "./routers";
import WrapQuery from "./services/ReactQuery/WrapQuery";
import "./styles.css";
function App() {
  return (
    <BrowserRouter>
      <WrapQuery>
        <Routers />
        <ScrollToTop/>
      </WrapQuery>
    </BrowserRouter>
  );
}

export default App;
