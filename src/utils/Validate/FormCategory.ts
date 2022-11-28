import * as yup from "yup";
import Regexs from "../Regexs";
yup.setLocale({
  mixed: {
    notType: "${path} is required",
  },
});
const validationCategory = yup.object().shape({
  categoryName: yup
    .string()
    .trim("Please remove the spaces")
    .strict(true)
    .required("Please enter username")
    .min(3)
    .default(""),
});
export { validationCategory };
