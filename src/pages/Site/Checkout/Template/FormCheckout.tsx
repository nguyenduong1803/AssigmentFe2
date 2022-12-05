import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import BaseFormCheckout from "../Molecule/BaseFormCheckout";
import { addCategory } from "../../../../services/categoryService/CategoryService";
import { validationCheckout } from "../../../../utils/Validate/FormCheckout";
import { createOrder } from "../../../../redux/sliceReducer/OrderSlice";
import { selectCart } from "../../../../redux/selector";
import { FormOrder, ICart } from "../../../../Types/Interface/Order";
import { AppDispatch } from "../../../../redux/store";
type FormData = {
  address: string;
  phoneNumber: string;
  note: string;
  username: string;
};
const FormAddCategory = () => {
  const dispatch =  useDispatch<AppDispatch>();
  const carts = useSelector(selectCart);
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationCheckout),
    defaultValues: validationCheckout.getDefault(),
  });
  const onSubmit = async (data: any) => {
    const datas:FormOrder = {
      ...data,
      userId: "63845f8ed75a0162ee28f90a",
      totalMoney: 120000,
      products: carts,
    };
    // createOrder
    dispatch(createOrder(datas));
    
  };
  const options = {
    form,
    onSubmit,
  };
  return <BaseFormCheckout {...options} />;
};
export default FormAddCategory;
