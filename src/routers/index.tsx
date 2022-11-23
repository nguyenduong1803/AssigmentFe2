import { FC, Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import RouterAdmin from "./admin";
import dashboard from "./admin";
// import privateRouter from "./private";

export type typeRouter = {
  path: string;
  element: Function;
  layout: Function;
};

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterAdmin />
    </Suspense>
  );
};
export default Routers;
