import { useFieldArray, useFormContext } from 'react-hook-form';
import { ControlsGroup } from '../../UI/ControlsGroup';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { RemoveIcon } from '../../UI/Icons/RemoveIcon';
import { Checkbox } from '../../UI/Checkbox';
import { SecondStepFormValues } from '..';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { FormControlWrapper } from '../../FormControlWrapper';
import s from './step2.module.scss';

export const Step2 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<SecondStepFormValues>();
  const { fields, append, remove } = useFieldArray<
    SecondStepFormValues,
    'advantages'
  >({
    name: 'advantages',
    control,
  });

  return (
    <>
      <ControlsGroup
        className={s.advantages}
        legendClassName={s.legend}
        legend="Advantages">
        {fields.map((field, i) => {
          return (
            <FormControlWrapper
              className={s.control}
              key={field.id}
              errorMsg={errors.advantages?.[i]?.advantage?.message}>
              <div className={s.wrapper}>
                <Input
                  className={s.input}
                  type="text"
                  placeholder="Advantage"
                  {...register(`advantages.${i}.advantage` as const)}
                />
                {fields.length !== 1 && (
                  <Button
                    variant="icon"
                    onClick={() => remove(i)}>
                    <RemoveIcon />
                  </Button>
                )}
              </div>
            </FormControlWrapper>
          );
        })}
        <Button
          className={s.button_add}
          onClick={() => append({ advantage: '' })}>
          +
        </Button>
      </ControlsGroup>

      <ControlsGroup
        className={s.checkboxes}
        legend="Checkbox group">
        <Checkbox
          {...register(`checkbox`)}
          id="field-checkbox-group-option-1"
          value={1}>
          1
        </Checkbox>
        <Checkbox
          {...register(`checkbox`)}
          id="field-checkbox-group-option-2"
          value={2}>
          2
        </Checkbox>
        <Checkbox
          {...register(`checkbox`)}
          id="field-checkbox-group-option-3"
          value={3}>
          3
        </Checkbox>
      </ControlsGroup>

      <ControlsGroup legend="Radio group">
        <Checkbox
          {...register('radio')}
          id="field-checkbox-group-option-1"
          type="radio"
          value={1}>
          1
        </Checkbox>
        <Checkbox
          {...register('radio')}
          id="field-checkbox-group-option-2"
          type="radio"
          value={2}>
          2
        </Checkbox>
        <Checkbox
          {...register('radio')}
          id="field-checkbox-group-option-3"
          type="radio"
          value={3}>
          3
        </Checkbox>
        <ErrorMessage
          className={s.error}
          errorMsg={errors.radio?.message}
        />
      </ControlsGroup>
    </>
  );
};
