import { Step, Stepper as Steps } from 'react-form-stepper';
import { CheckIcon } from '../UI/Icons/CheckIcon';
import s from './stepper.module.scss';

export const Stepper = ({
  activeStep,
  steps,
  className = '',
}: {
  activeStep: number;
  steps: number;
  className?: string;
}) => {
  return (
    <Steps
      connectorStyleConfig={{
        size: '8px',
        activeColor: '#5558FA',
        completedColor: '#5558FA',
        disabledColor: '#00000014',
        stepSize: '0.9em',
        style: 'solid',
      }}
      connectorStateColors={true}
      className={`${s.stepper} ${className}`}
      activeStep={activeStep}>
      {[...new Array(steps)].map((value, i) => {
        return (
          <Step
            key={i}
            className={s.step}
            styleConfig={{
              size: '16px',
              completedTextColor: '#5558FA',
              activeBgColor: '#5558FA',
              completedBgColor: '#5558FA',
              inactiveBgColor: '#A6A6A6',
              inactiveTextColor: '#A6A6A6',
              activeTextColor: '#FFF',
              borderRadius: '50%',
              circleFontSize: '13px',
              fontWeight: 400,
              labelFontSize: '14px',
            }}
            label={`${i}`}>
            {activeStep === i && <span className={s.dot}></span>}
            {activeStep > i && <CheckIcon className={s.icon} />}
          </Step>
        );
      })}
    </Steps>
  );
};
