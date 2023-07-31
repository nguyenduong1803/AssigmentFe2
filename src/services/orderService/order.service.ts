import { FormOrder, IOrder } from "../../Types/Interface/Order";
import HttpClient from "../../utils/HtppClient";

// get list order
const getOrder = async () => {
  try {
    const res = await HttpClient.get("order");
    return res;
  } catch (error) {
    console.log(error);
  }
};
// get order by id
const getOrderById = async (id: string | undefined) => {
  if (id) {
    try {
      const res = await HttpClient.get(`order/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
// add order
const addOrder = async (param: FormOrder) => {
  try {
    return await HttpClient.post(`order/add`, param);
  } catch (error) {
    console.log(error);
  }
};

// add order
const updateOrder = async (id: string | undefined, data: IOrder) => {
  try {
    return await HttpClient.put(`order/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};
const removeOrder = async (id: string | undefined) => {
  try {
    return await HttpClient.delete(`order/remove/` + id);
  } catch (error) {
    console.log(error);
  }
};
export { getOrder, getOrderById, addOrder, updateOrder, removeOrder };
