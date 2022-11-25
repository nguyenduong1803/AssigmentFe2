import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormEditCategory from "../../../components/Organism/FormCategory/FormEditcategory";
type Props = {};

const EditCategory = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{py:3}}> Edit Category</Typography>
        <FormEditCategory/>
      </Paper>
      
    </>
  );
};
export default EditCategory;
