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

const verifyToken = async (token: string | undefined) => {
  //
  if (token) {
    try {
      const res = await HttpClient.get(`auths/verifyToken`, {
        headers: { 'Authorization': `Bearer ${LocalStorage.get("accessToken")}`},
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};

export { login, logout, verifyToken };
