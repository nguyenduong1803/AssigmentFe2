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
  category: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter category")
    .default(""),
  price: yup
    .number()
    .required("Please enter price")
    .nullable()
    .default(undefined),
  quantity: yup
    .number()
    .required("Please enter quantity")
    .nullable()
    .default(undefined),
  discount: yup
    .number()
    .required("Please enter discount")
    .nullable()
    .default(undefined),
  file: yup
    .mixed()
    .test("required", "Please choose  file", (value) => {
      return value[0] ;
    }),
});
export { validationProduct };
