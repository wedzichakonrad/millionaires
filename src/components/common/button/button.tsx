import './button.sass';

type ButtonProps = {
  buttonText: string,
  onClick: () => void,
  className?: string,
}

export const Button = ({buttonText, onClick, className}: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  )
}