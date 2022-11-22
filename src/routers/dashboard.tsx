import { lazy } from "react";
import Layout from "../components/Template/Layout/DefaultLayout";
import DashboardLayout from "../components/Template/dashboard";
import { RouteObject, useRoutes } from "react-router-dom";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import Blogs from "../pages/Admin/Blogs/Blogs";

const Home = lazy(() => import("../pages/Site/Home/Home"));
const About = lazy(() => import("../pages/Site/About/About"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <DashboardLayout>
        <About />
      </DashboardLayout>
    ),
  },
  {
    path: "/product",
    element: (
      <DashboardLayout>
        <ManageProduct />
      </DashboardLayout>
    ),
  },
  {
    path: "/blog",
    element: (
      <DashboardLayout>
        <Blogs />
      </DashboardLayout>
    ),
  },
  {
    path: "/user",
    element: (
      <DashboardLayout>
        <ManageUser />
      </DashboardLayout>
    ),
  },
];
const RouterDashboard = () => {
  const routesDashboard = useRoutes(routes);
  return routesDashboard;
};
export default RouterDashboard;
