import { useForm } from "react-hook-form";
import { validationProduct } from "../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import BaseFormProduct from "../../Molecule/BaseForm/BaseFormProduct/BaseFormProduct";
import BaseFormOrder from "../../Molecule/BaseForm/BaseFormOrder/BaseFormOrder";
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
const fakeProduct = {
    name: "prodcut",
    status: "con hàng",
    quantity: "2",
    discount: "2",
    price: "2000",
  };
const ViewOrder = (props: Props) => {
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
  return <BaseFormOrder {...options}  />;
};
export default ViewOrder;
