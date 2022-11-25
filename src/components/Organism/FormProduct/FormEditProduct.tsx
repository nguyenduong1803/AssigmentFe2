import { useForm } from "react-hook-form";
import { validationProduct } from "../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import BaseFormProduct from "../../Molecule/BaseForm/BaseFormProduct/BaseFormProduct";
type Props = {};
type FormData = {
  name: string;
  status: string;
  file: File;
  quantity: number |  null;
  discount: number |  null;
  price: number |  null;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];
const fakeProduct = {
    name: "prodcut",
    status: "con hàng",
    quantity: 2,
    discount: 2,
    price: 2000,
  };
const FormEditProduct = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  const options={
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  }
  form.reset(fakeProduct)
useEffect(()=>{
  console.log("err",form.formState.errors)

})  
  return <BaseFormProduct {...options}  />;
};
export default FormEditProduct;
