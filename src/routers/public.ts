import { typeRouter } from "./index";
import { lazy } from "react";
import Layout from "../components/Layout";
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const publicRouter: typeRouter[] = [
  {
    path: "/",
    element: Home,
    layout:Layout,
  },
  {
    path: "/about",
    element: About,
    layout:Layout,
  },
];

export default publicRouter;
