import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import type {AlertProps} from "@mui/material/Alert"

export interface State extends SnackbarOrigin {
  open: boolean;
}
interface IProps extends AlertProps{
  message: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ToastMess(props:IProps) {
  const { setState, state, message} = props;

  return (
    <>
      <Snackbar
        open={state}
        autoHideDuration={6000}
        onClose={()=>setState(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={()=>setState(false)}  {...props}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
