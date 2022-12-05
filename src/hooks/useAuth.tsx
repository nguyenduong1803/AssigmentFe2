import { AuthContext } from "context/Auth";
import React, { Dispatch, SetStateAction } from "react";
import { UserLogin } from "Types/Interface/User";

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth;
};
export default useAuth;
