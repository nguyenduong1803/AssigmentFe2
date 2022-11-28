import { Dispatch, ReactNode, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  justifyContent: "space-between;",
  flexDirection: "column",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "200px",
  bgcolor: "background.paper",
  border: "1px solid #d2d2d2",
  boxShadow: 24,
  borderRadius: "4px",
  p: 4,
};
type TypeProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title:string;
  children:ReactNode;
};
export default function BasicModal(props: TypeProps) {
  const { open, children, title,setOpen } = props;
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Stack direction="row" justifyContent="flex-end" gap="24px">
          {children}
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
