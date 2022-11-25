import FormAddCategory from "../components/Organism/FormCategory/FormAddCategory";
import FormEditCategory from "../components/Organism/FormCategory/FormEditcategory";
import TemplateAdmin from "../components/Template/Admin/TemplateAdmin";
import AddCategory from "../pages/Admin/ManageCategory/AddCategory";
import EditCategory from "../pages/Admin/ManageCategory/EditCategory";
import ManageCategory from "../pages/Admin/ManageCategory/ManageCategory";

export const categoryRoute = {
  path: "category",
  children: [
    {
      index: true,
      element: (<TemplateAdmin><ManageCategory /> </TemplateAdmin>),
    },
    {
      path: "edit/:id",
      element: (<TemplateAdmin><EditCategory  /> </TemplateAdmin>),
    },
    {
      path: "add",
      element: (<TemplateAdmin><AddCategory /> </TemplateAdmin>),
    },
  ],
};
