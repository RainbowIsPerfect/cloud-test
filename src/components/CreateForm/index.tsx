import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { changeFields } from '../../store/slices/formSlice';
import { FormProvider } from 'react-hook-form';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Button } from '../UI/Button';
import { useSendDataMutation } from '../../store/api/api';
import { SuccessModal } from '../FormCompleteModal/SuccessModal';
import { ErrorModal } from '../FormCompleteModal/ErrorModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import s from './form.module.scss';
import { Stepper } from '../Stepper';

const firstStepSchema = z.object({
  nickname: z
    .string()
    .nonempty({ message: 'Введите ваш ник' })
    .regex(/^[A-ZА-Я0-9]+$/gi, {
      message: 'Ник может состоять только из цифр и букв',
    })
    .max(30, { message: 'Максимальная длина ника 30 символов' }),
  name: z
    .string()
    .nonempty({ message: 'Введите ваше имя' })
    .regex(/^[A-ZА-Я]+$/gi, { message: 'Имя может состоять только из букв' })
    .max(50, { message: 'Максимальная длина имени 50 символов' }),
  sername: z
    .string()
    .nonempty({ message: 'Введите вашу фамилию' })
    .regex(/^[A-ZА-Я]+$/gi, {
      message: 'Фамилия может состоять только из букв',
    })
    .max(50, { message: 'Максимальная длина фамилии 50 символов' }),
  sex: z.union(
    [
      z.literal('woman', { errorMap: () => ({ message: 'Выберите пол' }) }),
      z.literal('man', { errorMap: () => ({ message: 'Выберите пол' }) }),
    ],
    {
      required_error: 'Выберите пол',
    }
  ),
});

const secondStepSchema = z.object({
  advantages: z
    .array(z.object({ advantage: z.string().trim() }))
    .transform((arg) => arg.filter((value) => value.advantage))
    .default([]),
  radio: z.string({ invalid_type_error: 'Выберите опцию' }),
  checkbox: z.array(z.string()).default([]),
});

const thridStepSchema = z.object({
  about: z
    .string()
    .trim()
    .nonempty({ message: 'Введите информацию о себе' })
    .refine(
      (arg) => {
        const message = arg.replace(/\s/g, '');
        return message.length < 200 && message.length > 0;
      },
      { message: 'Максимальная длина поля 200 символов' }
    ),
});

const finalSchema = firstStepSchema
  .merge(secondStepSchema)
  .merge(thridStepSchema);

export type FirstStepFormValues = z.infer<typeof firstStepSchema>;
export type SecondStepFormValues = z.infer<typeof secondStepSchema>;
export type ThirdStepFormValues = z.infer<typeof thridStepSchema>;
export type CreateFormValues = z.infer<SchemaType>;
type SchemaType = typeof finalSchema;

export const CreateForm = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [sendData, { isSuccess, data, isError }] = useSendDataMutation();
  const navigate = useNavigate();
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const { methods, next, prevStep, step, isLastStep } = useMultiStepForm<
    CreateFormValues,
    SchemaType
  >({
    steps: [
      ['name', 'nickname', 'sername', 'sex'],
      ['advantages', 'radio', 'checkbox'],
      ['about'],
    ],
    schema: finalSchema,
    mode: 'onTouched',
    // defaultValues: {
    //   ...formState,
    //   advantages:
    //     formState.advantages.length === 0
    //       ? [{ advantage: '' }, { advantage: '' }, { advantage: '' }]
    //       : formState.advantages,
    // },
  });
  const { handleSubmit } = methods;

  const onSubmit = async (values: CreateFormValues) => {
    dispatch(changeFields(values));
    const response = await sendData({
      ...values,
      advantages: values.advantages.map((value) => value.advantage),
      radio: Number(values.radio),
      checkbox: values.checkbox.map((value) => Number(value)),
    }).unwrap();

    if (response.status === 'success') {
      return setIsSuccessModalOpen(true);
    }

    return setIsErrorModalOpen(true);
  };

  return (
    <>
      <SuccessModal
        message={data?.message}
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
      />
      <ErrorModal
        isOpen={isErrorModalOpen}
        setIsOpen={setIsSuccessModalOpen}
      />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={s.form}>
          <Stepper
            className={s.stepper}
            steps={3}
            activeStep={step}
          />
          <div className={s.controls}>
            {step === 0 && <Step1 />}
            {step === 1 && <Step2 />}
            {step === 2 && <Step3 />}
          </div>
          <div className={s.buttons}>
            <Button
              type="button"
              onClick={() => (step === 0 ? navigate('/') : prevStep())}>
              Назад
            </Button>
            {!isLastStep && (
              <Button
                type="button"
                id="button-next"
                onClick={next}
                variant="solid">
                Далее
              </Button>
            )}
            {isLastStep && (
              <Button
                type="submit"
                id="button-send"
                variant="solid"
                disabled={!isLastStep}>
                Отправить
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
