import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

interface IToastMessage {
  message: string | null;
  status?: 'success' | 'error' | 'warning' | 'info';
}
interface InitialStateType {
  toastMessage: IToastMessage;
}

const initialState: InitialStateType = {
  toastMessage: { message: null }
};

export const toastMessageSlice = createSlice({
  name: 'notifycation',
  initialState,
  reducers: {
    setToastMessage: (state, { payload }) => {
      state.toastMessage = payload.infoToast;
    }
  }
});

export const { setToastMessage } = toastMessageSlice.actions;

export const useSetNotifyState = () => {
  const dispatch = useDispatch();
  const setToastInformation = (infoToast: IToastMessage) => {
    dispatch(setToastMessage({ infoToast }));
  };
  return { setToastInformation };
};

export default toastMessageSlice;
