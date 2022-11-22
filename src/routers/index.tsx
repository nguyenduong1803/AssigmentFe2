import { FC, Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import RouterDashboard from "./dashboard";
import dashboard from "./dashboard";
// import privateRouter from "./private";

export type typeRouter = {
  path: string;
  element: Function;
  layout: Function;
};

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterDashboard />
    </Suspense>
  );
};
export default Routers;
