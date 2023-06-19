import { Dispatch, SetStateAction } from 'react';
import { ErrorModal } from './ErrorModal';
import { SuccessModal } from './SuccessModal';

interface FormCompleteModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const FormCompleteModal = ({
  isOpen,
  setIsOpen,
}: FormCompleteModalProps) => {
  if (isError) {
    return (
      <ErrorModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }

  if (isSuccess) {
    return (
      <SuccessModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }

  return null;
};
