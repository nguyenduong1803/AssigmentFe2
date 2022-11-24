import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import AddProduct from "../pages/Admin/ManageProduct/AddProduct";
import EditProduct from "../pages/Admin/ManageProduct/EditProduct";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";

export const productRoute = {
  path: "product",
  children: [
    {
      index: true,
      element: (<TemplateAdmin><ManageProduct /> </TemplateAdmin>),
    },
    {
      path: "edit:id",
      element: (<TemplateAdmin><EditProduct /> </TemplateAdmin>),
    },
    {
      path: "add",
      element: (<TemplateAdmin><AddProduct /> </TemplateAdmin>),
    },
  ],
};
