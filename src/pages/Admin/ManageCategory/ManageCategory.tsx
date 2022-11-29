import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import { Stack } from "@mui/material";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
import TableCategory from "./Organism/TableCategory";
import { getCategory } from "../../../services/categoryService/CategoryService";
import { useQuery } from "react-query";
type Props = {};

const ManageCategory = (props: Props) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink  to="/manage/category/add">Add Category</ButtonLink>
      </Stack>
      <TableCategory />
    </>
  );
};
export default ManageCategory;
