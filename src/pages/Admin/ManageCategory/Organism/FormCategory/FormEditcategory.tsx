import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import BaseFormCategory from "../../Molecule/BaseFormCategory";
import { validationCategory } from "../../../../../utils/Validate/FormCategory";
import {
  getCategoryById,
  updateCategory,
} from "../../../../../services/categoryService/CategoryService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
type FormData = {
  _id: string;
  categoryName: string ;
};

const fakeUser = {
  _id: "ầds",
  categoryName: "categoryName",
};
const FormEditCategory = () => {
  const [data, setData] = useState<FormData>();
  const { id } = useParams();
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationCategory),
    defaultValues: validationCategory.getDefault(),
  });
  // submit form
  const onSubmit = async (data: FormData) => {
    const { categoryName } = data;
    const res = await updateCategory(id,{categoryName})
  };
  const options = {
    form,
    onSubmit,
  };
  // get data category
  useEffect(() => {
    if (!id) return;
    const fethData = async () => {
      const res = await getCategoryById(id);
      console.log(res);
      setData(res.data);
    };
    fethData();
  }, [id]);
  // reset data category
  useEffect(() => {
    if (!data) return;
    form.reset({
      categoryName: data?.categoryName,
      _id: data?._id,
    });
  }, [data, form, form.reset, id]);

  return <BaseFormCategory {...options} />;
};
export default FormEditCategory;
