import s from './error-message.module.scss';

interface ErrorMessageProps {
  errorMsg: string | undefined;
  className?: string;
}

export const ErrorMessage = ({
  errorMsg,
  className = '',
}: ErrorMessageProps) => {
  return (
    errorMsg !== undefined && (
      <p className={`${s.error} ${className}`}>{errorMsg}</p>
    )
  );
};
