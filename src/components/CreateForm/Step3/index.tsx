import { useFormContext } from 'react-hook-form';
import { FormControlWrapper } from '../../FormControlWrapper';
import { ThirdStepFormValues } from '..';
import { TextareaWithCounter } from '../../UI/TextareaWithCounter';

export const Step3 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ThirdStepFormValues>();

  const getCurrentChars = () => {
    if (watch('about')) {
      return watch('about').replace(/\s/g, '').length;
    }
    return 0;
  }

  return (
    <FormControlWrapper
      label="About"
      errorMsg={errors.about?.message}
      htmlFor="field-about">
      <TextareaWithCounter
        currentChars={getCurrentChars()}
        maxChars={200}
        id="field-about"
        placeholder="About"
        autoFocus
        {...register('about')}
      />
    </FormControlWrapper>
  );
};
