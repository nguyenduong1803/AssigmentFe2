import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import AddUser from "../pages/Admin/ManageUser/AddUser";
import EditUser from "../pages/Admin/ManageUser/EditUser";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";

export const userRoute = {
  path: "user",
  children: [
    {
      index: true,
      element: (<TemplateAdmin><ManageUser /> </TemplateAdmin>),
    },
    {
      path: "edit/:id",
      element: (<TemplateAdmin><EditUser /> </TemplateAdmin>),
    },
    {
      path: "add",
      element: (<TemplateAdmin><AddUser /> </TemplateAdmin>),
    },
  ],
};
