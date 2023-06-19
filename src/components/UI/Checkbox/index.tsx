import { ComponentPropsWithoutRef, forwardRef } from 'react';
import s from './checkbox.module.scss';

export type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  id: string;
  children: string;
  type?: 'checkbox' | 'radio';
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, id, type = 'checkbox', ...props }, ref) => {
    return (
      <div className={s.checkbox}>
        <input
          ref={ref}
          className={s.checkbox__input}
          id={id}
          type={type}
          {...props}
        />
        <label
          className={s.checkbox__label}
          htmlFor={id}>
          {children}
        </label>
      </div>
    );
  }
);
