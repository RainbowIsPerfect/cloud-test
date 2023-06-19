import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateFormValues } from '../../components/CreateForm';

const initialState: CreateFormValues = {
  nickname: '',
  name: '',
  sername: '',
  sex: 'man',
  advantages: [{ advantage: '' }, { advantage: '' }, { advantage: '' }],
  radio: '',
  checkbox: [],
  about: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeFields: (_, action: PayloadAction<CreateFormValues>) => {
      return action.payload;
    },
  },
});
export const { changeFields } = formSlice.actions;
export const formReducer = formSlice.reducer;
