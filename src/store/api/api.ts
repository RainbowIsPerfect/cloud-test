import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateFormValues } from '../../components/CreateForm';

type TransformedCreateFormValues = Omit<CreateFormValues, 'advantages' | 'radio' | 'checkbox'> & {
  advantages: string[];
  radio: number;
  checkbox: number[];
};

type SendDataReturn = {
  status: string;
  message: string;
}

export const formApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
  }),
  endpoints: (builder) => ({
    sendData: builder.mutation<SendDataReturn, TransformedCreateFormValues>({
      query: (formValues) => ({
        url: '',
        method: 'POST',
        body: formValues,
      }),
    }),
  }),
});

export const { useSendDataMutation } = formApi;
