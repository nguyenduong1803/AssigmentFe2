import React from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import TableProduct from "../../../components/Organism/TableProduct/TableProduct";
type Props = {};
const data = [
  {
    _id: 1,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 2,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
  {
    _id: 4,
    name: "Product 1",
    price: 100000,
    quantity: 200,
    discount: 23,
    description: "product description",
    image: "link image",
    create_at: "10-12-2022",
  },
];
const ManageProduct = (props: Props) => {
  return (
    <>
      <BasicBreadcrumbs />
      <TableProduct data={data} tableName="product" />
    </>
  );
};
export default ManageProduct;
