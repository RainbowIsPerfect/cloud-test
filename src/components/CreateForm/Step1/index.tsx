import { useFormContext } from 'react-hook-form';
import { FormControlWrapper } from '../../FormControlWrapper';
import { Input } from '../../UI/Input';
import { Select } from '../../UI/Select';
import { FirstStepFormValues } from '..';

export const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FirstStepFormValues>();

  const optionsMock = [
    { id: 'field-sex-option-man', value: 'man' },
    { id: 'field-sex-option-woman', value: 'woman' },
  ];

  return (
    <>
      <FormControlWrapper
        label="Nickname"
        htmlFor="field-nickname"
        errorMsg={errors.nickname?.message}>
        <Input
          placeholder="Nickname"
          autoFocus
          id="field-nickname"
          {...register('nickname')}
        />
      </FormControlWrapper>

      <FormControlWrapper
        label="Name"
        htmlFor="field-name"
        errorMsg={errors.name?.message}>
        <Input
          id="field-name"
          placeholder="Name"
          {...register('name')}
        />
      </FormControlWrapper>

      <FormControlWrapper
        label="Sername"
        htmlFor="field-sername"
        errorMsg={errors.sername?.message}>
        <Input
          id="field-sername"
          placeholder="Sername"
          {...register('sername')}
        />
      </FormControlWrapper>

      <FormControlWrapper
        label="Sex"
        htmlFor="field-sex"
        errorMsg={errors.sex?.message}>
        <Select
          id="field-sex"
          {...register('sex')}>
          {optionsMock.map((props) => (
            <option
              key={props.value}
              {...props}>
              {props.value}
            </option>
          ))}
        </Select>
      </FormControlWrapper>
    </>
  );
};
