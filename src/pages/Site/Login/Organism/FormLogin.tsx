import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/Auth";

import ToastMess from "../../../../components/Atom/ToastMess/ToastMess";
import { AppDispatch } from "../../../../redux/store";
import { auth } from "../../../../services/firebase/firebase";
import LocalStorage from "../../../../utils/LocalStorage";
import { validationLogin } from "../../../../utils/Validate/FormUser";
import BaseFormLogin from "../Molecule/BaseFormLogin";
import { login } from "services/UserService/Auth";
import { UserLogin } from "Types/Interface/User";

type Props = {};
type FormData = {
  emai: string;
  password: string;
};
const provider = new GoogleAuthProvider();
const FormLogin = (props: Props) => {
  const navigate = useNavigate();
  const authen = useContext(AuthContext);
  const [openToast, setOpenToast] = React.useState<boolean>(false);
  //
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationLogin),
    defaultValues: validationLogin.getDefault(),
  });
  const onSubmit = async (data: any) => {
    const { forgotpassword, ...body } = data;
    const res = await login(body)
    if (!res) {
      setOpenToast(true);
      return;
    }
    console.log(res.user)
    const newUser:UserLogin={
      fullname: res.user.fullname,
      email: res.user.email,
      isAdmin: res.user.isAdmin,
      updatedAt: res.user.updatedAt,
      phone: res.user.phone,
      _id: res.user._id,
    }
    authen?.setUser(newUser)
    console.log(res);
    if (res.user) {
      navigate("/");
    }
  };

  //   handle login google
  const handleLoginGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    const idToken = await res.user.getIdToken();
    console.log(res);
    LocalStorage.set("accessToken", idToken);
    LocalStorage.set("typeLogin", "google");
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
