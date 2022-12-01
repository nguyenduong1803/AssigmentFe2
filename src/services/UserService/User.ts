import HttpClient from "../../utils/HtppClient";

// get list prodcut
const getUser = async () => {
  try {
    const res = await HttpClient.get("auths");
    return res;
  } catch (error) {
    console.log(error);
  }
};
// get prodcut by id
const getUserById = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`auths/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
// add prodcut
const addUser = async (param: any) => {
  try {
    return await HttpClient.post(`auths/add`, param);
  } catch (error) {
    console.log(error);
  }
};
interface ParamUpdateUser {
  name: string;
  status: string;
  describe: string;
  file?: string;
  quantity: string;
  discount: string;
  price: string;
}
// add prodcut
const updateUser = async (id: string | undefined, data: ParamUpdateUser) => {
  try {
    return await HttpClient.put(`auths/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
const removeUser = async (id:string | undefined) => {
  try {
    return await HttpClient.delete(`auths/remove/`+id);
  } catch (error) {
    console.log(error);
  }
};
export { getUser, getUserById, addUser, updateUser,removeUser};
