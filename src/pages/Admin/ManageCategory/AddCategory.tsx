import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormAddCategory from "./Organism/FormCategory/FormAddCategory";
type Props = {};

const AddCategory = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{ py: 3 }}>
          {" "}
          Add Category
        </Typography>
        <FormAddCategory />
      </Paper>
    </>
  );
};
export default AddCategory;
