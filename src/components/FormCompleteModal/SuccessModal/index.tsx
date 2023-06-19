import { Button } from '../../UI/Button';
import { Modal } from '../../UI/Modal';
import { SuccessIcon } from '../../UI/Icons/SuccessIcon';
import { useNavigate } from 'react-router-dom';
import { ComponentProps } from 'react';
import s from './success-modal.module.scss';

interface SuccessModalProps extends Omit<ComponentProps<typeof Modal>, 'children'> {
  message?: string;
};

export const SuccessModal = ({ message, isOpen, setIsOpen }: SuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <header className={s.header}>{message}</header>
      <div className={s.body}>
        <div className={s.overlay}>
          <SuccessIcon />
        </div>
      </div>
      <Button
        id="button-to-main"
        onClick={() => navigate('/')}
        variant="solid">
        На главную
      </Button>
    </Modal>
  );
};
