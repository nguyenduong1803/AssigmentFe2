import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import ScrollToTop from "./components/Atom/ScrollToTop/ScrollToTop";
import Routers from "./routers";
import WrapQuery from "./services/ReactQuery/WrapQuery";
import "./styles.css";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <WrapQuery>
          <Routers />
          <ScrollToTop />
        </WrapQuery>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
