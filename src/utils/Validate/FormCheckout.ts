import * as yup from "yup";
import Regexs from "../Regexs";

const validationCheckout = yup.object().shape({
  username: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter product name")
    .min(3)
    .default(""),
  address: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter product name")
    .min(3)
    .default(""),
    email: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter email")
    .default(""),
  phoneNumber: yup
    .string()
    .required("required")
    .trim("Please remove the spaces")
    .matches(Regexs.phone, "only Number")
    .default(""),
    note: yup
    .string()
    .trim("Please remove the spaces")
    .max(300)
    .default(""),
});
export { validationCheckout };
