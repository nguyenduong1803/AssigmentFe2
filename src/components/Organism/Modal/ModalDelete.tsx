import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import BasicModal from "../../Atom/Modal/ModalCofirm";
import useProductSlice from "hooks/useProductSlice";

type Props = {
  id: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleDeleteProduct?: () => void;
};

export default function ModalDelete({ id, open, setOpen,handleDeleteProduct }: Props) {
  return (
    <BasicModal
      title="Do you want delete product?"
      setOpen={setOpen}
      open={open}
    >
      <Button onClick={() => setOpen(false)} color="error" variant="contained">
        Cancel
      </Button>
      <Button variant="contained" color="success" onClick={handleDeleteProduct}>
        Delete
      </Button>
    </BasicModal>
  );
}
