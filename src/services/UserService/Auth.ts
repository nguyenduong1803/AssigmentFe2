import HttpClient from "../../utils/HtppClient";
import LocalStorage from "../../utils/LocalStorage";

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

interface IAuth {
  fullname: string;
  email: string;
  isAdmin: boolean;
  updatedAt: string;
  password: string;
  _id: string;
}
const verifyToken = async (type: any | undefined) => {
  //
  try {
    const res = await HttpClient.post(`auths/verifyToken`, {
      body: type,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { login, logout, verifyToken };
