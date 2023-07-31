import { useForm } from "react-hook-form";
import {
  TFormProduct,
  validationProduct,
} from "../../../../../utils/Validate/FormProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import BaseFormProduct from "../../Molecule/BaseFormProduct/BaseFormProduct";
import { getProductByIds } from "../../../../../services/productService/ProductService";
import { useParams } from "react-router-dom";
import { getBase64 } from "../../../../../utils/Base64";
import useProductSlice from "hooks/useProductSlice";
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
  const [data, setData] = useState<TFormProduct>();
  const { handleUpdate } = useProductSlice();
  const { id } = useParams();

  const form = useForm<TFormProduct>({
    mode: "onChange",
    resolver: yupResolver(validationProduct),
    defaultValues: validationProduct.getDefault(),
  });
  const onSubmit = async (data: TFormProduct) => {
    const base64 = await getBase64(data?.file[0]);
    const newData = { ...data, file: base64 } as TFormProduct;
    handleUpdate(id || "", newData);
  };
  const options = {
    fakeOptions,
    fakeCategoey,
    form,
    onSubmit,
  };
  useEffect(() => {
    console.log(id);
    if (!id) return;
    const fethData = async () => {
      const res = await getProductByIds(id);
      console.log(res);
      setData(res.data);
    };
    fethData();
  }, [id]);
  // reset data
  useEffect(() => {
    console.log(data);
    if (!data) return;
    form.reset(data);
  }, [data, form, form.reset, id]);

  return <BaseFormProduct {...options} />;
};
export default FormEditProduct;
