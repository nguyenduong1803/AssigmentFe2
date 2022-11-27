import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { validationProduct } from "../../../utils/Validate/FormProduct";
import BaseFormCategory from "../../../pages/Admin/ManageCategory/Molecule/BaseFormCategory/BaseFormCategory";
type Props = {};
type FormData = {
  name: string;
  status: string;
  describe: string;
  file?: File;
  quantity: string;
  discount: string;
  price: string;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];

const FormAddCategory = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit,
  };
  useEffect(() => {
    console.log("err", form.formState.errors);
  });
  return <BaseFormCategory {...options} />;
};
export default FormAddCategory;
