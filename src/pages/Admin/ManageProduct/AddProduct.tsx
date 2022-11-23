import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormProduct from "../../../components/Molecule/BaseFormProduct/FormProduct";
type Props = {};

const AddProduct = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>AddProduct</Paper>
      <FormProduct/>
    </>
  );
};
export default AddProduct;
