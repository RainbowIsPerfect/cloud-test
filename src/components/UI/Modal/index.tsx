import { createPortal } from 'react-dom';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import s from './modal.module.scss';

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>;

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return isOpen
    ? createPortal(
        <div
          className={s.modal}
          onMouseDown={() => setIsOpen(false)}>
          <div className={s.modal__container}>
            <div
              className={s.modal__content}
              onMouseDown={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('modal') as HTMLElement
      )
    : null;
};
