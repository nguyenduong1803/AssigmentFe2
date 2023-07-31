import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormAddProduct from "./Organism/FormProduct/FormAddProduct";
import { useSetNotifyState } from "redux/sliceReducer/NotifySlice";
type Props = {};

const AddProduct = (props: Props) => {
  const { setToastInformation } = useSetNotifyState();
  return (
    <>
      <BasicBreadcrumbs />
      <button onClick={()=>setToastInformation({status:"warning",message:"toátat:"})}>Tóaast</button>
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{ py: 3 }}>
          Add Product
        </Typography>
        <FormAddProduct />
      </Paper>
    </>
  );
};
export default AddProduct;
