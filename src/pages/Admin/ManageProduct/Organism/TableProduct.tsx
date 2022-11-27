import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

import MoreVery from "../../../../components/Atom/MoreVery/MoreVery";
import BasicTable from "../../../../components/Molecule/BaseForm/BasicTable/BasicTable";
import ModalDelete from "../../../../components/Organism/Modal/ModalDelete";
import { removeProduct } from "../../../../services/productService/ProductService";

export default function TableProduct(props: any) {
  const { data, tableName, onIsUpdate, isUpdate } = props;
  const [open, setOpen] = useState<boolean>(false);
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
    data.map((row: any, index: number) => (
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
          <MoreVery tableName={tableName} setOpen={setOpen} id={row._id} />
        </TableCell>
        <ModalDelete
          removeProduct={removeProduct}
          onIsUpdate={onIsUpdate}
          isUpdate={isUpdate}
          setOpen={setOpen}
          id={row._id}
          open={open}
        />
      </TableRow>
    ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
