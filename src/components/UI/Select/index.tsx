import { ComponentPropsWithoutRef, forwardRef } from 'react';
import s from './select.module.scss';

type SelectProps = ComponentPropsWithoutRef<'select'>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      placeholder = 'Не выбрано',
      defaultValue = '',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <select
        className={`${s.select} ${className}`}
        defaultValue={defaultValue}
        ref={ref}
        {...props}>
        <option
          value=""
          disabled
          hidden>
          {placeholder}
        </option>
        {children}
      </select>
    );
  }
);
