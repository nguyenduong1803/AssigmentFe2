import * as yup from "yup";
import Regexs from "../Regexs";
yup.setLocale({
  mixed: {
    notType: "${path} is required",
  },
});
const validationProduct = yup.object().shape({
  name: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter product name")
    .min(3)
    .default(""),
  status: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter status product")
    .default(""),
  categories: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter category")
    .default(""),
  price: yup
    .string()
    .required("required")
    .trim("Please remove the spaces")
    .matches(Regexs.number, "only Number")
    .default(""),
  quantity: yup
    .string()
    .required("required")
    .trim("Please remove the spaces")
    .matches(Regexs.number, "only Number")
    .default(""),
  discount: yup
    .string()
    .required("required")
    .trim("Please remove the spaces")
    .matches(Regexs.number, "only Number")
    .default(""),
  file: yup.mixed().test("required", "Please choose  file", (value) => {
    return value[0];
  }),
});
type TFormProduct = yup.InferType<typeof validationProduct>;
export type { TFormProduct };
export { validationProduct };
