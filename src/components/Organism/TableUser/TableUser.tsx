import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

import MoreVery from "../../Atom/MoreVery/MoreVery";
import BasicTable from "../../Molecule/BaseForm/BasicTable/BasicTable";
import ModalDelete from "../Modal/ModalDelete";

export default function TableUser(props: any) {
  const { data, tableName } = props;
  const [open, setOpen] = useState<boolean>(false);
  const listKeyLabel = data ? Object.keys(data[0]) : [];
  // computed label
  const listLabel = listKeyLabel.map((label, index) => (
    <TableCell sx={{ textTransform: "capitalize" }} key={index} align="right">
      {label}
    </TableCell>
  ));
  // computed row
  const listRow = data.map((row: any, index: number) => (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th">{row._id}</TableCell>
      <TableCell component="th">{row.name}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.discount}</TableCell>
      <TableCell align="right">{row.quantity}</TableCell>
      <TableCell align="right">{row.description}</TableCell>
      <TableCell align="right">{row.image}</TableCell>
      <TableCell align="right">{row.create_at}</TableCell>
      <TableCell>
        <MoreVery tableName={tableName} setOpen={setOpen} id={row._id} />
      </TableCell>
      {/* <ModalDelete setOpen={setOpen} open={open}  id={row._id} /> */}
    </TableRow>
  ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
