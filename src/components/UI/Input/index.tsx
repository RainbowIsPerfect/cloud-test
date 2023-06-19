import { ComponentPropsWithoutRef, forwardRef } from 'react';
import s from './input.module.scss';

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'children'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`${s.input} ${className}`}
        {...props}
      />
    );
  }
);
