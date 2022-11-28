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
import { ICategory } from "../../../../Types/Interface/Category";

export default function TableCategory(props: any) {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, error, data, refetch } = useQuery(
    "categories",
    () => getCategory(),
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
  const labels = ["ID", "Create At", "Category"];
  const listLabel = labels.map((label, index) => (
    <TableCell sx={{ textTransform: "capitalize" }} key={index}>
      {label}
    </TableCell>
  ));
  // computed row
  const listRow =
    data &&
    data.data.map((row: ICategory, index: number) => (
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th">{row._id}</TableCell>
        <TableCell component="th">{row.createdAt}</TableCell>
        <TableCell component="th">{row.categoryName}</TableCell>
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
