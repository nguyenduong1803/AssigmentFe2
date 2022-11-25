import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import MoreVery from "../../Atom/MoreVery/MoreVery";
import BasicTable from "../../Molecule/BaseForm/BasicTable/BasicTable";

export default function TableProduct(props: any) {
  const { data, tableName } = props;
  const labels =["ID","Name","Description","Price","Discount","Image","Comments","Create At"]
  // computed label
  const listLabel = labels.map((label, index) => (
    <TableCell sx={{ textTransform: "capitalize" }} key={index}>
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
      <TableCell >{row.describe}</TableCell>
      <TableCell >{row.price}</TableCell>
      <TableCell >{row.discount}</TableCell>
      <TableCell >{row.comments}</TableCell>
      <TableCell >{row.image}</TableCell> 
      <TableCell >{row.createdAt}</TableCell>
      <TableCell >
        <MoreVery tableName={tableName} id={row._id} />
      </TableCell>
    </TableRow>
  )) ||[];
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
