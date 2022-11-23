import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import BasicTable from "../../Molecule/BasicTable/BasicTable";
import MoreVery from "../../Atom/MoreVery/MoreVery";

export default function TableProduct(props: any) {
  const { data, tableName } = props;
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
      <TableCell align="right">
        <MoreVery tableName={tableName} id={row._id} />
      </TableCell>
    </TableRow>
  ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
