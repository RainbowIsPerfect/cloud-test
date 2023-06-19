import { Button } from '../../UI/Button';
import { ErrorIcon } from '../../UI/Icons/ErrorIcon';
import { Modal } from '../../UI/Modal';
import { ComponentProps } from 'react';
import s from './error-modal.module.scss';
import { CloseIcon } from '../../UI/Icons/CloseIcon';

export const ErrorModal = ({
  isOpen,
  setIsOpen,
}: Omit<ComponentProps<typeof Modal>, 'children'>) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}>
      <header className={s.header}>
        <span>Ошибка</span>
        <button
          onClick={() => setIsOpen(false)}
          className={s.button_close}>
          <CloseIcon />
        </button>
      </header>
      <div className={s.body}>
        <div className={s.overlay}>
          <ErrorIcon />
        </div>
      </div>
      <footer className={s.footer}>
        <Button
          className={s.button_footer}
          id="button-close"
          onClick={() => setIsOpen(false)}
          variant="solid">
          Закрыть
        </Button>
      </footer>
    </Modal>
  );
};
