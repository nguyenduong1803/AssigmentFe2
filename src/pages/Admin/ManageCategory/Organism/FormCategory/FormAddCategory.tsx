import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BaseFormCategory from "../../Molecule/BaseFormCategory";
import { validationCategory } from "../../../../../utils/Validate/FormCategory";
import { addCategory } from "../../../../../services/categoryService/CategoryService";
type FormData = {
  categoryName: string;
};
const FormAddCategory = () => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationCategory),
    defaultValues: validationCategory.getDefault(),
  });
  const onSubmit = async (data: any) => {
    const { categoryName } = data;
    console.log(categoryName);
    const res = await addCategory({ categoryName });
  };
  const options = {
    form,
    onSubmit,
  };
  return <BaseFormCategory {...options} />;
};
export default FormAddCategory;
