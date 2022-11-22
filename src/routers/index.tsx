import { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRouter from "./public";
// import privateRouter from "./private";

export type typeRouter = {
  path: string;
  element: Function;
  layout:Function;
};

const Routers = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
          {publicRouter.map((item, index) => {
            const Element = item.element;
            const Layout=item.layout
            return (
              <Route element={<Layout><Element/></Layout>} path={item.path} key={index}></Route>
            );
          })}
      </Routes>
    </Router>
  </Suspense>
  );
};
export default Routers;
