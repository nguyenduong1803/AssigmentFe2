import {
  createContext,
  useState,
  ReactElement,
  useEffect,
} from "react";
import { verifyToken } from "../services/UserService/Auth";
import LocalStorage from "utils/LocalStorage";
import { TypeAuth, UserLogin } from "Types/Interface/User";


type TypeProps = {
  children: ReactElement;
};
export const AuthContext = createContext<TypeAuth | undefined>(undefined);

const Auth = (props: TypeProps) => {
  const { children } = props;
  const [user, setUser] = useState<UserLogin | undefined>(undefined);
  const type = LocalStorage.get("typeLogin");

  const newValue: TypeAuth = {
    user,
    setUser,
  };
  useEffect(() => {
    if (type) {
      (async () => {
        const res = await verifyToken(type);
        const user = res?.data;
        const newUser: UserLogin = {
          fullname: user.fullname,
          email: user.email,
          isAdmin: user.isAdmin,
          updatedAt: user.updatedAt,
          phone: user.phone,
          _id: user._id,
        };
        setUser(newUser);
      })();
    }
  },[]);
  return (
    <AuthContext.Provider value={newValue}>{children}</AuthContext.Provider>
  );
};
export default Auth;
