import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../../components/Atom/Breadcrumbs/Breadcrumbs";
import TableProduct from "./Organism/TableProduct";
import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { getProduct } from "../../../services/productService/ProductService";
import ButtonLink from "../../../components/Atom/Button/ButtonLink";
type Props = {};

const ManageProduct = (props: Props) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const { isLoading, error, data, refetch } = useQuery(
    "repoData",
    () => getProduct(),
    {
      staleTime: 4000,
    }
  );
  useEffect(() => {
    if (isUpdate) {
      console.log("update");
      refetch();
      console.log(data);
      setIsUpdate(false);
    }
  }, [isUpdate]);
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: </p>;

  return (
    <>
      <Stack direction="row" justifyContent="space-between" marginBottom={2}>
        <BasicBreadcrumbs />
        <ButtonLink to="/manage/product/add">Add Product</ButtonLink>
      </Stack>
      <TableProduct
        onIsUpdate={setIsUpdate}
        isUpdate={isUpdate}
        data={data?.data}
        tableName="product"
      />
    </>
  );
};
export default ManageProduct;
