import { useForm } from "react-hook-form";
import { validationProduct } from "../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import BaseFormProduct from "../../Molecule/BaseFormProduct/BaseFormProduct";
type Props = {};
type FormData = {
  name: string;
  file: File;
  quantity: number |  null;
  discount: number |  null;
  price: number |  null;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];

const FormProduct = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: any) => {
    console.log("Data")
    console.log(data);
  };
  const options={
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit
  }
  
  return <BaseFormProduct {...options}  />;
};
export default FormProduct;
