interface ButtonAttributes {
  className: string;
  onClick: () => void;
}

// ButtonProps tem as mesmas props que ButtonAttributes
type ButtonProps = ButtonAttributes;

const Button = ({ className, onClick }: ButtonProps) => {};
