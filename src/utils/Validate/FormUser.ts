import * as yup from "yup";
import Regexs from "../Regexs";
yup.setLocale({
  mixed: {
    notType: "${path} is required",
  },
});
const validationProduct = yup.object().shape({
  username: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter username")
    .min(3)
    .default(""),
  email: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter email")
    .default(""),
  password: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter password")
    .default(""),
  file: yup
    .mixed()
    .test("required", "Please choose  file", (value) => {
      return value[0] ;
    }),
});
export { validationProduct };
