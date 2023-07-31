import { Alert, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { useSetNotifyState } from 'redux/sliceReducer/NotifySlice';

const ToastMessage: () => JSX.Element = () => {
  const toastMessage = useSelector((state: RootState) => state.MessageSlice.toastMessage);
  const { setToastInformation } = useSetNotifyState();
  const closeToast = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastInformation({
      message: null
    });
  };
  console.log(toastMessage);
  return (
    <>
      {toastMessage.message && Object.keys(toastMessage).length > 0 ? (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Object.keys(toastMessage).length > 0}
          autoHideDuration={3000}
          onClose={closeToast}
        >
          <Alert variant='filled' onClose={closeToast} severity={toastMessage.status} sx={{ width: '100%' }}>
            {toastMessage.message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToastMessage;
