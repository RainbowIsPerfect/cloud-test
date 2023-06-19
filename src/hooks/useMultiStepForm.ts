import { useSteps } from './useSteps';
import { useForm, FieldValues, Path, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';
import { AnyZodObject } from 'zod';

interface MultiStepForm<
  TValues extends FieldValues,
  TResolver extends AnyZodObject
> extends Omit<UseFormProps<TValues>, 'resolver'> {
  schema: TResolver;
  steps: Array<Array<Path<TValues>>>;
}

export const useMultiStepForm = <
  TValues extends FieldValues,
  TResolver extends AnyZodObject
>({
  schema,
  steps,
  ...props
}: MultiStepForm<TValues, TResolver>) => {
  const { step, nextStep, prevStep, isLastStep } = useSteps(steps.length - 1);
  const methods = useForm<TValues>({
    resolver: zodResolver<TResolver>(schema),
    ...props,
  });

  const next = async () => {
    const isValidStep = await methods.trigger(steps[step], {
      shouldFocus: true,
    });

    if (isValidStep && !isLastStep) {
      nextStep();
    }
  };

  return { step, isLastStep, next, prevStep, methods };
};
