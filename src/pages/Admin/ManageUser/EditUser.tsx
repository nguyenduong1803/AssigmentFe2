import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormEditUser from "../../../components/Organism/FormUser/FormEditUser";
type Props = {};

const EditUser = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{py:3}}> Edit user</Typography>
        <FormEditUser/>
      </Paper>
      
    </>
  );
};
export default EditUser;
