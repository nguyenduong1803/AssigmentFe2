import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { validationProduct } from "../../../utils/Validate/FormProduct";
import BaseFormUser from "../../Molecule/BaseForm/BaseFormUser/BaseFormUser";
type Props = {};
type FormData = {
  name: string;
  status: string;
  describe:string;
  file?: File;
  quantity: string ;
  discount: string ;
  price: string ;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];
const fakeUser = {
    name: "prodcut",
    status: "con hàng",
    quantity: "2",
    discount: "2",
    price: "2000",
  };
const FormEditUser = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: any) => {
  };
  const options={
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  }
  form.reset(fakeUser)
useEffect(()=>{
  console.log("err",form.formState.errors)
})  
  return <BaseFormUser {...options}  />;
};
export default FormEditUser;
