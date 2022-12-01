import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import MoreVery from "../../../../components/Atom/MoreVery/MoreVery";
import BasicTable from "../../../../components/Molecule/BaseForm/BasicTable/BasicTable";
import ModalDelete from "../../../../components/Organism/Modal/ModalDelete";
import {
  getCategory,
  removeCategory,
} from "../../../../services/categoryService/CategoryService";
import { getOrder } from "../../../../services/orderService/OrderService";
import { IOrder } from "../../../../Types/Interface/Order";

export default function TableOrder(props: any) {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, error, data, refetch } = useQuery(
    "categories",
    () => getOrder(),
    {
      staleTime: 4000,
    }
  );
  useEffect(() => {
    if (isUpdate) {
      refetch();
      setIsUpdate(false);
    }
  }, [isUpdate]);

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: </p>;
  // computed label
  const labels = ["ID", "UserId", "Address", "Phone number", "note", "totalMoney","Create at","Status"];
  const listLabel = labels.map((label, index) => (
    <TableCell sx={{ textTransform: "capitalize" }} key={index}>
      {label}
    </TableCell>
  ));
  // computed row
  const listRow =
    data &&
    data.data.map((row: IOrder, index: number) => (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th">{row._id}</TableCell>
        <TableCell component="th">{row.userId}</TableCell>
        <TableCell component="th">{row.address}</TableCell>
        <TableCell component="th">{row.phoneNumber}</TableCell>
        <TableCell component="th">{row.note}</TableCell>
        <TableCell component="th">{row.totalMoney}</TableCell>
        <TableCell component="th">{row.createdAt}</TableCell>
        <TableCell component="th">{row.status}</TableCell>
        <TableCell component="th">
          <MoreVery tableName="category" setOpen={setOpen} id={row._id} />
        </TableCell>
        <ModalDelete
          removeProduct={removeCategory}
          onIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
          setOpen={setOpen}
          id={row._id}
          open={open}
        />
      </TableRow>
    ));
  return <BasicTable listLabel={listLabel} listRow={listRow} />;
}
