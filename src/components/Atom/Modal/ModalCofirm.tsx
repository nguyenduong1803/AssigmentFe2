import { Dispatch, SetStateAction } from "react";
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
  id: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function BasicModal(props: TypeProps) {
  const { open, id, setOpen } = props;
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
            Do you want delete product?
          </Typography>
          <Stack direction="row" justifyContent="flex-end" gap="24px">
            <Button color="error" variant="contained">
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
