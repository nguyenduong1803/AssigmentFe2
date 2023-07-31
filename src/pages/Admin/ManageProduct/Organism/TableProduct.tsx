import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import MoreVery from "../../../../components/Atom/MoreVery/MoreVery";
import BasicTable from "../../../../components/Molecule/BaseForm/BasicTable/BasicTable";
import useProductSlice from "hooks/useProductSlice";

export default function TableProduct() {
  const [open, setOpen] = useState<boolean>(false);
  const { products, loading, getAllProduct } = useProductSlice();
  useEffect(() => {
    getAllProduct();
  }, []);
  if (loading) return <p>Loading..</p>;
  // eslint-disable-next-line react-hooks/exhaustive-deps

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
    products &&
    products.map((row: any, index: number) => (
      <TableRow
        key={row._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th">{index + 1}</TableCell>
        <TableCell component="th">{row._id}</TableCell>
        <TableCell component="th">{row.name}</TableCell>
        <TableCell>{row.describe}</TableCell>
        <TableCell>{row.price}</TableCell>
        <TableCell>{row.discount}</TableCell>
        <TableCell>
          <img style={{ width: "60px" }} src={row.images[0]} alt="" />
        </TableCell>
        <TableCell>{row.comments}</TableCell>
        <TableCell>{row.createdAt}</TableCell>
        <TableCell>
        <MoreVery
              tableName="product"
              setOpen={setOpen}
              open={open}
              id={row._id}
            />
        </TableCell>
      </TableRow>
    ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
