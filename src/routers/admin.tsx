import { lazy } from "react";
// import Layout from "../components/Template/Layout/DefaultLayout";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import Blogs from "../pages/Admin/Blogs/Blogs";
import Page404 from "../pages/Page404";
import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";

const Home = lazy(() => import("../pages/Site/Home/Home"));
const About = lazy(() => import("../pages/Site/About/About"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <TemplateAdmin>
        <Home />
      </TemplateAdmin>
    ),
  },
  {
    path: "/about",
    element: (
      <TemplateAdmin>
        <About />
      </TemplateAdmin>
    ),
  },
  {
    path: "/product",
    element: (
      <TemplateAdmin>
        <ManageProduct />
      </TemplateAdmin>
    ),
  },
  {
    path: "/blog",
    element: (
      <TemplateAdmin>
        <Blogs />
      </TemplateAdmin>
    ),
  },
  {
    path: "/user",
    element: (
      <TemplateAdmin>
        <ManageUser />
      </TemplateAdmin>
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
