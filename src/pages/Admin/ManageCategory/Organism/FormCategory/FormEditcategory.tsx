import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import BaseFormCategory from "../../Molecule/BaseFormCategory";
import { validationCategory } from "../../../../../utils/Validate/FormCategory";
type Props = {};
type FormData = {
  categoryName: string | undefined;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];
const fakeUser = {
  _id: "ầds",
  categoryName: "categoryName",
};
const FormEditCategory = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationCategory),
    defaultValues: validationCategory.getDefault(),
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
  form.reset(fakeUser);
  useEffect(() => {
    console.log("err", form.formState.errors);
  });
  return <BaseFormCategory {...options} />;
};
export default FormEditCategory;
