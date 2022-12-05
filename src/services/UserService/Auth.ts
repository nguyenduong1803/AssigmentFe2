import { CommonResponse } from "Types/Interface/Common";
import HttpClient from "../../utils/HtppClient";

// login
const login = async (param: any) => {
  try {
    const res = await HttpClient.post(`auths/login`, param);
    return res;
  } catch (error) {
    console.log(error);
  }
};
// logout
const logout = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`auths/login`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};

interface TypeVerifyToken {
  type: string;
}
const verifyToken = async (params: TypeVerifyToken) => {
  //
  try {
    const res = await HttpClient.post<typeof params, CommonResponse>(
      `auths/verifyToken`,
      { type:params.type }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { login, logout, verifyToken };
