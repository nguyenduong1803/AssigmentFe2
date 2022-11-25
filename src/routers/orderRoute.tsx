import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import OrderDetail from "../pages/Admin/ManageOrder/OrderDetail";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";

export const orderRoute = {
  path: "order",
  children: [
    {
      index: true,
      element: (<TemplateAdmin><ManageUser /> </TemplateAdmin>),
    },
    {
      path: "detail/:id",
      element: (<TemplateAdmin><OrderDetail /> </TemplateAdmin>),
    },
  ],
};
