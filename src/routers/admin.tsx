import { lazy } from "react";
// import Layout from "../components/Template/Layout/DefaultLayout";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";
import Blogs from "../pages/Admin/ManageBlogs/Blogs";
import Page404 from "../pages/Page404";
import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import ManageCategory from "../pages/Admin/ManageCategory/ManageCategory";
import { productRoute } from "./productRoute";
import { userRoute } from "./userRoute";
import { categoryRoute } from "./categoryRoute";
import { orderRoute } from "./orderRoute";
import DefaultLayout from "../components/Template/Layout/DefaultLayout";
const Home = lazy(() => import("../pages/Site/Home/Home"));
const About = lazy(() => import("../pages/Site/About/About"));

const routes: RouteObject[] = [
  // router client
  { 
    path: "/", element: (<DefaultLayout><Home /></DefaultLayout> ),
  },
  // router admin manager
  {
    path: "manage",
    children:[
      {
        index:true,
        element: ( <TemplateAdmin> <Home /></TemplateAdmin> )
      },
      {
        path: "about",
        element: (<TemplateAdmin><About /></TemplateAdmin>),
      }, 
      {
        path: "blog",
        element: ( <TemplateAdmin><Blogs /></TemplateAdmin>),
      },
      productRoute,
      userRoute,
      categoryRoute,
      orderRoute
    ]
  },
  { path: "404", element: <Page404 /> },
  { path: "*", element: <Navigate to="/404" /> },
];
const RouterAdmin = () => {
  const routesDashboard = useRoutes(routes);
  return routesDashboard;
};
export default RouterAdmin;
