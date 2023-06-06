import { useForm } from "react-hook-form";
import { validationProduct } from "../../../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import BaseFormProduct from "../../Molecule/BaseFormProduct/BaseFormProduct";
import { addProduct } from "../../../../../services/productService/ProductService";


import { getBase64 } from "../../../../../utils/Base64";
import { getCategory } from "services/categoryService/CategoryService";
type Props = {};
type FormData = {
  name: string;
  status: string;
  describe: string;
  file: File[];
  quantity: string;
  discount: string;
  price: string;
  categories: string;
};

const fakeOptions = ["Còn hàng", "Hết hàng"];

const FormAddProduct = (props: Props) => {
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: FormData) => {
    const base64 = await getBase64(data.file[0])
    const newData = {...data,file:base64}
    const res = await addProduct(newData);
  };
  const options = {
    fakeOptions,
    form,
    onSubmit,
  };

  return <BaseFormProduct {...options} />;
};
export default FormAddProduct;
