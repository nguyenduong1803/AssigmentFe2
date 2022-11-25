import { Typography } from "@mui/material";
import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import Paper from "../../../components/Atom/Paper/Paper";
import FormAddUser from "../../../components/Organism/FormUser/FormAddUser";
type Props = {};

const AddUser = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <Paper elevation={1}>
        <Typography variant="h5" textAlign="center" sx={{py:3}}> Add User</Typography>
        <FormAddUser/>
      </Paper>
      
    </>
  );
};
export default AddUser;
