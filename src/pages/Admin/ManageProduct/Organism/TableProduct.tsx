import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import MoreVery from "../../../../components/Atom/MoreVery/MoreVery";
import BasicTable from "../../../../components/Molecule/BaseForm/BasicTable/BasicTable";
import ModalDelete from "../../../../components/Organism/Modal/ModalDelete";
import { getProduct, removeProduct } from "../../../../services/productService/ProductService";

export default function TableProduct() {
  const [open, setOpen] = useState<boolean>(false);
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
      refetch();
      setIsUpdate(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: </p>;
  const labels = [
    "ID",
    "Name",
    "Description",
    "Price",
    "Discount",
    "Image",
    "Comments",
    "Create At",
  ];
  // computed label
  const listLabel = labels.map((label, index) => (
    <TableCell sx={{ textTransform: "capitalize" }} key={index}>
      {label}
    </TableCell>
  ));
  // computed row
  const listRow =
    data &&
    data.data.map((row: any, index: number) => (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th">{row._id}</TableCell>
        <TableCell component="th">{row.name}</TableCell>
        <TableCell>{row.describe}</TableCell>
        <TableCell>{row.price}</TableCell>
        <TableCell>{row.discount}</TableCell>
        <TableCell>{row.comments}</TableCell>
        <TableCell>{row.image}</TableCell>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell>
          <MoreVery tableName="product" setOpen={setOpen} id={row._id} />
        </TableCell>
        {open &&<ModalDelete
          removeProduct={removeProduct}
          onIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
          setOpen={setOpen}
          id={row._id}
          open={open}
        />}
      </TableRow>
    ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
