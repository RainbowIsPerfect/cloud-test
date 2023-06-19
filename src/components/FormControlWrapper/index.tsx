import { ReactNode } from 'react';
import { Label } from '../UI/Label';
import { ErrorMessage } from '../UI/ErrorMessage';
import s from './form-control-wrapper.module.scss';

interface FormControlWrapperProps {
  children: ReactNode;
  errorMsg: string | undefined;
  className?: string;
  label?: string;
  htmlFor?: string;
}

export const FormControlWrapper = ({
  label,
  children,
  errorMsg,
  htmlFor,
  className = '',
}: FormControlWrapperProps) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      {label !== undefined && (
        <Label
          className={s.label}
          htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      {children}
      <ErrorMessage
        className={s.error}
        errorMsg={errorMsg}
      />
    </div>
  );
};
