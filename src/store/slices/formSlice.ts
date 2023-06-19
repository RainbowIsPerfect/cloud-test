import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateFormValues } from '../../components/CreateForm';

const enum Sex {
  woman = 'woman',
  man = 'man',
}

// phone: string;
// email: string;
// phone: '',
// email: '',

// interface Form {
//   nickname: string;
//   name: string;
//   sername: string;
//   sex: 'woman' | 'man';
//   advantages: { advantage: string }[];
//   radio: number;
//   checkbox: number[];
//   about: string;
// }

const initialState: CreateFormValues = {
  nickname: '',
  name: '',
  sername: '',
  sex: 'woman',
  advantages: [{ advantage: '' }, { advantage: '' }, { advantage: '' }],
  radio: 1,
  checkbox: [],
  about: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeFields: (state, action: PayloadAction<CreateFormValues>) => {
      return action.payload;
    },
  },
});
export const { changeFields } = formSlice.actions;
export const formReducer = formSlice.reducer;
