import React, { ReactNode, createContext, useState } from "react";
import { verifyToken } from "../services/UserService/Auth";
import { useQuery } from "react-query";
import LocalStorage from "utils/LocalStorage";

interface IAuth {
  fullname: string;
  email: string;
  isAdmin: boolean;
  updatedAt: string;
  password: string;
  _id: string;
}
type TypeProps = {
  children: ReactNode;
};
export const ProviderAuth = createContext<IAuth | undefined>(undefined);

const Auth = (props: TypeProps) => {
  const { children } = props;
  const [user, setUser] = useState<IAuth | undefined>(undefined);
  const type = LocalStorage.get("typeLogin");
  const { isSuccess, isError, data } = useQuery(["verifyToken"], () =>
    verifyToken(type)
  );
  console.log(data);
  return <ProviderAuth.Provider value={user}>{children}</ProviderAuth.Provider>;
};
export default Auth;
