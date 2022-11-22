import HttpClient from "../../utils/HtppClient";

// get list prodcut
const getProduct = async () => {
  try {
    const res = await HttpClient.get("products");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getProduct };
