import { ComponentPropsWithoutRef, forwardRef } from 'react';
import s from './textarea.module.scss';

type TextareaProps = Omit<ComponentPropsWithoutRef<'textarea'>, 'children'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        className={`${s.textarea} ${className}`}
        ref={ref}
        {...props} />
    );
  }
);
