import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";
import { verifyToken } from "../services/UserService/Auth";
import { useQuery } from "react-query";
import LocalStorage from "utils/LocalStorage";
import { UserLogin } from "Types/Interface/User";


type TypeAuth ={
  user:UserLogin|undefined,
  setUser:Dispatch<SetStateAction<UserLogin|undefined>>
}
type TypeProps = {
  children: ReactNode;
};
export const AuthContext = createContext<TypeAuth | undefined>(undefined);

const Auth = (props: TypeProps) => {
  const { children } = props;
  const [user, setUser] = useState<UserLogin|undefined>(undefined);
  // const type = LocalStorage.get("typeLogin");
  // const { isSuccess, isError, data } = useQuery(["verifyToken"], () =>
  //   verifyToken(type)
  // );
  // console.log(data);
  const newValue:TypeAuth={
    user,setUser
  }
  return (
    <AuthContext.Provider value={newValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default Auth;
