import { Stack } from "@mui/material";
import React, { ChangeEventHandler } from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
import TableUser from "../../../components/Organism/TableUser/TableUser";
type Props = {};
const data = [
  {
    _id: 1,
    name: "user",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 2,
    name: "user",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 3,
    name: "user",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 4,
    name: "user",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
];
const ManageUser = (props: Props) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/user/add">Add User</ButtonLink>
      </Stack>
      <TableUser data={data} tableName="user" />
    </>
  );
};
export default ManageUser;
