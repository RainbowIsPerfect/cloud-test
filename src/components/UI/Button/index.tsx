import { ComponentPropsWithoutRef, forwardRef } from 'react';
import s from './button.module.scss';

type ButtonVariant = 'solid' | 'outlined' | 'icon';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'outlined',
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`${s[`button_${variant}`]} ${className}`}
        type={type}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
);
