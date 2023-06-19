import { z } from 'zod';
import { FormControlWrapper } from '../../FormControlWrapper';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { withHookFormMask } from 'use-mask-input';
import s from './user-form.module.scss';

const schema = z.object({
  phone: z
    .string()
    .nonempty({ message: 'Введите номер телефона' })
    .regex(/\+7 \(9\d{2}\) \d{3}-\d{2}-\d{2}/g, {
      message: 'Неверный номер',
    }),
  email: z
    .string()
    .nonempty({ message: 'Введите email' })
    .email({ message: 'Неправильный email' }),
});

type UserFormValues = z.infer<typeof schema>;

export const UserForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      email: 'andrey.smollin1@gmail.com',
      phone: '+7 (950) 220-93-51',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(() => navigate('/create'))}
      className={s.form}>
      <FormControlWrapper
        errorMsg={errors.phone?.message}
        label="Номер телефона">
        <Input
          className={s.input}
          disabled
          {...withHookFormMask(register('phone'), '+7 (999) 999-99-99')}
          type="text"
          placeholder="+7 999 999-99-99"
        />
      </FormControlWrapper>
      <FormControlWrapper
        className={s['last-input']}
        errorMsg={errors.email?.message}
        label="Email">
        <Input
          className={s.input}
          disabled
          {...register('email')}
          type="text"
          placeholder="example@example.com"
        />
      </FormControlWrapper>
      <Button
        id="button-start"
        variant="solid"
        type="submit">
        Начать
      </Button>
    </form>
  );
};
