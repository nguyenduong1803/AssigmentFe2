import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/Auth";

import ToastMess from "../../../../components/Atom/ToastMess/ToastMess";
import { auth } from "../../../../services/firebase/firebase";
import LocalStorage from "../../../../utils/LocalStorage";
import { validationLogin } from "../../../../utils/Validate/FormUser";
import BaseFormLogin from "../Molecule/BaseFormLogin";
import { login } from "services/UserService/Auth";
import { UserLogin } from "Types/Interface/User";

type FormData = {
  email: string;
  password: string;
};
const provider = new GoogleAuthProvider();
const FormLogin = () => {
  const navigate = useNavigate();
  const authen = useContext(AuthContext);
  const [openToast, setOpenToast] = React.useState<boolean>(false);

  // hanlde login account registed
  const form = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(validationLogin),
    defaultValues: {
      email:"test1@gmail.com",
      password:'123456'
    },
  });
  const onSubmit = async (data: any) => {
    const { forgotpassword, ...body } = data;
    LocalStorage.remove("accessToken");
    const res = await login(body);
    if (!res) {
      setOpenToast(true);
      return;
    }
    const newUser: UserLogin = {
      isAuthenticated:true,
      fullname: res.user.fullname,
      email: res.user.email,
      isAdmin: res.user.isAdmin,
      updatedAt: res.user.updatedAt,
      phone: res.user.phone,
      _id: res.user._id,
    };
    authen?.setUser(newUser);
    LocalStorage.set("accessToken", res.token);
    LocalStorage.set("typeLogin", "registed");
    console.log(res);
    if (res.user) {
      navigate("/");
    }
  };

  //   handle login google
  const handleLoginGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    if (!res) {
      setOpenToast(true);
      return;
    }
    const idToken = await res.user.getIdToken();
    LocalStorage.set("accessToken", idToken);
    LocalStorage.set("typeLogin", "google");
    if (idToken) {
      const newUser: UserLogin = {
        isAuthenticated:true,
        fullname: res.user.displayName || "",
        email: res.user.email || "",
        isAdmin: false,
        updatedAt: "",
        phone: "",
        _id: res.user.uid || "",
      };
      authen?.setUser(newUser);
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
