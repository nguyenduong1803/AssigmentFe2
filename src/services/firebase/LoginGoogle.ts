import { IOrder } from "../../Types/Interface/Order";
import HttpClient from "../../utils/HtppClient";
import LocalStorage from "../../utils/LocalStorage";

const loginGoogle = async () => {
  try {
    return await HttpClient.post(`auths/google`,{
        Headers: { 'Authorization': `Bearer ${LocalStorage.get("accessToken")}`}
    });
  } catch (error) {
    console.log(error);
  }
};
export default loginGoogle;
