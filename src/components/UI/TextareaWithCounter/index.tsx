import { ComponentProps, forwardRef } from 'react';
import { Textarea } from '../Textarea';
import s from './textarea-with-counter.module.scss';

interface TextareaWithCounter
  extends Omit<ComponentProps<typeof Textarea>, 'ref'> {
  maxChars: number;
  currentChars: number;
}

export const TextareaWithCounter = forwardRef<
  HTMLTextAreaElement,
  TextareaWithCounter
>(({ maxChars, currentChars, className = '', ...props }, ref) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <Textarea
        className={s.textarea}
        ref={ref}
        {...props}
      />
      <span className={s.counter}>{`${currentChars} / ${maxChars}`}</span>
    </div>
  );
});
