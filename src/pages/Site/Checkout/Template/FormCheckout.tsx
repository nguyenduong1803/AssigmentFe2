import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BaseFormCheckout from "../Molecule/BaseFormCheckout";
import { addCategory } from "../../../../services/categoryService/CategoryService";
import { validationCheckout } from "../../../../utils/Validate/FormCheckout";

type FormData = {
  address:string,
  phoneNumber:string,
  note:string,
  username:string
};
const FormAddCategory = () => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationCheckout),
    defaultValues: validationCheckout.getDefault(),
  });
  const onSubmit = async (data: any) => {
    console.log(data)
  };
  const options = {
    form,
    onSubmit,
  };
  return <BaseFormCheckout {...options} />;
};
export default FormAddCategory;
