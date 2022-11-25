import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import ViewOrder from "../../../components/Organism/FormOrder/ViewOrder";
import FormEditProduct from "../../../components/Organism/FormProduct/FormEditProduct";
type Props = {};

const OrderDetail = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <ViewOrder/>
      </Paper>
    </>
  );
};
export default OrderDetail;
