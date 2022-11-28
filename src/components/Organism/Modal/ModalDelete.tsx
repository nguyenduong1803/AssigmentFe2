import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import {  useQuery } from "react-query";
import BasicModal from "../../Atom/Modal/ModalCofirm";

type Props = {
  id: string;
  open: boolean;
  isUpdate: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onIsUpdate: Dispatch<SetStateAction<boolean>>;
  removeProduct:(id:string)=>Promise<any>;
};

export default function ModalDelete({ open, setOpen, id,onIsUpdate,isUpdate ,removeProduct}: Props) {
  const { isSuccess,isError } = useQuery(["delete"],()=> removeProduct(id),{enabled:isUpdate})

  const handleDelete = () => {
    onIsUpdate(true)
    setOpen(false);
  };
  return (
    <BasicModal
      title="Do you want delete product?"
      setOpen={setOpen}
      open={open}
    >
      <Button onClick={() => setOpen(false)} color="error" variant="contained">
        Cancel
      </Button>
      <Button variant="contained" color="success" onClick={handleDelete}>
        Delete
      </Button>
    </BasicModal>
  );
}
