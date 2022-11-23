import { lazy } from "react";
import Layout from "../components/Template/Layout/DefaultLayout";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import Blogs from "../pages/Admin/Blogs/Blogs";
import Page404 from "../pages/Page404";
import Admin2 from "../components/Template/Admin/TemplateAdmin";

const Home = lazy(() => import("../pages/Site/Home/Home"));
const About = lazy(() => import("../pages/Site/About/About"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Admin2>
        <Home />
      </Admin2>
    ),
  },
  {
    path: "/about",
    element: (
      <Admin2>
        <About />
      </Admin2>
    ),
  },
  {
    path: "/product",
    element: (
      <Admin2>
        <ManageProduct />
      </Admin2>
    ),
  },
  {
    path: "/blog",
    element: (
      <Admin2>
        <Blogs />
      </Admin2>
    ),
  },
  {
    path: "/user",
    element: (
      <Admin2>
        <ManageUser />
      </Admin2>
    ),
  },
  { path: "404", element: <Page404 /> },
  { path: "*", element: <Navigate to="/404" /> },
];
const RouterAdmin = () => {
  const routesDashboard = useRoutes(routes);
  return routesDashboard;
};
export default RouterAdmin;
