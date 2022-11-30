import { useForm } from "react-hook-form";
import { validationProduct } from "../../../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import BaseFormProduct from "../../Molecule/BaseFormProduct/BaseFormProduct";
import {
  getProductById,
  updateProduct,
} from "../../../../../services/productService/ProductService";
import { useParams } from "react-router-dom";
import { getBase64 } from "../../../../../utils/Base64";
interface FormData {
  name: string;
  status: string;
  describe: string;
  file: File[];
  quantity: string;
  discount: string;
  price: string;
  categories: string;
}

const fakeOptions = ["Còn hàng", "Hết hàng"];
const fakeCategoey = ["Điện thoại", "laptop"];
const FormEditProduct = (props: any) => {
  const [data, setData] = useState<FormData>();
  const { id } = useParams();

  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: FormData) => {
    const base64 = await getBase64(data?.file[0]);
    const newData = { ...data, file: base64 };
    const res = await updateProduct(id, newData);
    console.log(res);
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit,
  };
  useEffect(() => {
    if (!id) return;
    const fethData = async () => {
      const res = await getProductById(id);
      setData(res.data);
    };
    fethData();
  }, [id]);
  // reset data
  useEffect(() => {
    if (!data) return;
    form.reset({
      name: data?.name,
      status: data?.status,
      quantity: data?.quantity,
      price: data?.price,
      discount: data?.discount,
      describe: data?.describe,
      categories: data?.categories,
    });
  }, [data, form, form.reset, id]);

  return <BaseFormProduct {...options} />;
};
export default FormEditProduct;
