import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ToastMess from "../../../../components/Atom/ToastMess/ToastMess";
import { actionLogin } from "../../../../redux/sliceReducer/AuthSlice";
import { AppDispatch } from "../../../../redux/store";
import { auth } from "../../../../services/firebase/firebase";
import loginGoogle from "../../../../services/firebase/LoginGoogle";
import { login } from "../../../../services/UserService/Auth";
import LocalStorage from "../../../../utils/LocalStorage";
import { validationLogin } from "../../../../utils/Validate/FormUser";
import BaseFormLogin from "../Molecule/BaseFormLogin";

type Props = {};
type FormData = {
  emai: string;
  password: string;
};
const provider = new GoogleAuthProvider();
const FormLogin = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [openToast, setOpenToast] = React.useState<boolean>(false);
  //
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationLogin),
    defaultValues: validationLogin.getDefault(),
  });
  const onSubmit = async (data: any) => {
    const { forgotpassword } = data;
    const body: FormData = data.body;
    const res = dispatch(actionLogin(body));
    if (!res) {
      setOpenToast(true);
      return;
    }
  };
  //   handle login google
  const handleLoginGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    const idToken = await res.user.getIdToken();
    LocalStorage.set("accessToken", idToken);
    if (idToken) {
      navigate("/");
    }
  };
  const options = {
    form,
    onSubmit,
    handleLoginGoogle,
  };
  return (
    <>
      <BaseFormLogin {...options} />
      <ToastMess
        setState={setOpenToast}
        state={openToast}
        message="Thông tin tài khoản hoặc mật khẩu không đúng"
        variant="standard"
        severity="error"
      />
    </>
  );
};
export default FormLogin;
