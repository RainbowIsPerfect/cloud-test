import { ReactNode } from 'react';
import s from './controls-group.module.scss';

interface ControlsGroupProps {
  children: ReactNode;
  legend: string;
  legendClassName?: string;
  className?: string;
}

export const ControlsGroup = ({ children, legend, className = '', legendClassName = '' }: ControlsGroupProps) => {
  return (
    <fieldset className={`${s.fieldset} ${className}`}>
      <legend className={`${s.legend} ${legendClassName}`}>{legend}</legend>
      {children}
    </fieldset>
  );
};
