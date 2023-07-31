import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./components/Atom/ScrollToTop/ScrollToTop";
import Routers from "./routers";
import store from "./redux/store";
import WrapQuery from "./services/ReactQuery/WrapQuery";
import Auth from "./context/Auth";
import "./styles.css";
import ToastMessage from "components/Atom/ToastMessage/ToastMessage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <WrapQuery>
            <Routers />
            <ScrollToTop />
          </WrapQuery>
        </Auth>
      </BrowserRouter>
      <ToastMessage />
    </Provider>
  );
}
export default App;
