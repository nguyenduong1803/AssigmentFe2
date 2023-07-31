import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSetNotifyState } from "redux/sliceReducer/NotifySlice";
import {
  actionAddProduct,
  actionGetProduct,
  actionRemoveProduct,
  actionUpdateProduct,
} from "redux/sliceReducer/ProductSlice";
import { RootState, useAppDispatch } from "redux/store";
import { TFormProduct } from "utils/Validate/FormProduct";

export default function useProductSlice() {
  const state = useSelector((state: RootState) => state.ProductSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setToastInformation } = useSetNotifyState();

  const showNotify = (action: any, type: string) => {
    console.log(action.type);
    if (action.type.endsWith("/fulfilled")) {
      navigate("/manage/product");
      setToastInformation({ message: `${type} thành công` });
    } else if (action.type.endsWith("/rejected")) {
      setToastInformation({ message: `${type} thất bại`, status: "error" });
    }
  };
  // get all
  const getAllProduct = () => {
    if (state.products && state.products.length === 0) {
      return dispatch(actionGetProduct());
    }
  };
  // add
  const handleAdd = async (body: TFormProduct) => {
    const action = await dispatch(actionAddProduct(body));
    console.log(action);
    showNotify(action, "Thêm sản phẩm");
  };
  // update
  const handleUpdate = async (id: string, body: TFormProduct) => {
    const action = await dispatch(actionUpdateProduct({ id, body }));
    showNotify(action, "Cập nhật sản phẩm");
  };
  // delete
  const handleDetele = async (id: string) => {
    const action = await dispatch(actionRemoveProduct(id));
    showNotify(action, "Xóa sản phẩm");
  };
  const getProductById = (id: string) => {
    return state.products.find((product) => product._id === id);
  };

  return {
    ...state,
    handleDetele,
    handleUpdate,
    getProductById,
    getAllProduct,
    handleAdd,
  };
}
