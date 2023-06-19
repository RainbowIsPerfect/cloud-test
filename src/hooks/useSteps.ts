import { useState } from 'react';

export const useSteps = (maxSteps: number) => {
  const [step, setStep] = useState<number>(0);

  const nextStep = (): void => {
    if (maxSteps !== step) {
      return setStep((prev) => prev + 1);
    }
  };

  const prevStep = (): void => {
    if (step !== 0) {
      return setStep((prev) => prev - 1);
    }
  };

  return {
    step,
    nextStep,
    prevStep,
    isLastStep: step === maxSteps,
  };
};
