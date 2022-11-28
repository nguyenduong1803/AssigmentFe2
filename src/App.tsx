import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import WrapQuery from "./services/ReactQuery/WrapQuery";
import "./styles.css"
function App() {
  return (
    <BrowserRouter>
      <WrapQuery>
        <Routers />
      </WrapQuery>
    </BrowserRouter>
  );
}

export default App;
