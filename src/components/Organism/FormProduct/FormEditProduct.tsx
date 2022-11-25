import { useForm } from "react-hook-form";
import { validationProduct } from "../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import BaseFormProduct from "../../Molecule/BaseForm/BaseFormProduct/BaseFormProduct";
import { useQuery } from "react-query";
import { getProductById } from "../../../services/productService/ProductService";
import { useParams } from "react-router-dom";
type Props = {};
type FormData = {
  name: string;
  status: string;
  file: File;
  quantity: number | null;
  discount: number | null;
  price: number | null;
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
  const { id } = useParams();
  const [product, setProduct] = useState<FormData>();
  console.log(id);
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
  form.reset(fakeProduct);
  useEffect(() => {
    const fetData = async () => {
      const res = await getProductById("638066b3c040a0be519575b1");
      console.log(res.data);
      setProduct(res.data);
    };
    fetData();
  }, [id]);
  return <BaseFormProduct {...options} />;
};
export default FormEditProduct;
