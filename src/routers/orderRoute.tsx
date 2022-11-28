import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import ManageOrder from "../pages/Admin/ManageOrder/ManageOrder";
import OrderDetail from "../pages/Admin/ManageOrder/OrderDetail";

export const orderRoute = {
  path: "order",
  children: [
    {
      index: true,
      element: (<TemplateAdmin><ManageOrder /> </TemplateAdmin>),
    },
    {
      path: "detail/:id",
      element: (<TemplateAdmin><OrderDetail /> </TemplateAdmin>),
    },
  ],
};
