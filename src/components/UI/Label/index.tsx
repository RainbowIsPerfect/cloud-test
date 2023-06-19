import { ComponentPropsWithoutRef } from 'react';
import s from './label.module.scss';

type LabelProps = ComponentPropsWithoutRef<'label'>;

export const Label = ({ children, className = '', ...props }: LabelProps) => {
  return (
    <label
      className={`${s.label} ${className}`}
      {...props}>
      {children}
    </label>
  );
};
