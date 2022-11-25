import { useForm } from "react-hook-form";
import { validationProduct } from "../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import BaseFormProduct from "../../Molecule/BaseForm/BaseFormProduct/BaseFormProduct";
import { addProduct } from "../../../services/productService/ProductService";
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

const FormAddProduct = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
   const res= await addProduct(data)
  console.log(res)
  };
  const options={
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  }
useEffect(()=>{
  console.log("err",form.formState.errors)

})  
  return <BaseFormProduct {...options}  />;
};
export default FormAddProduct;
