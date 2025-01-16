interface ButtonAttributes {
  className: string;
  onClick: () => void;
}

interface ButtonProps extends ButtonAttributes {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

// ButtonProps contem as props de ButtonAttributes mais as props dela
const Button = ({
  className,
  onClick,
  size,
  variant,
  isFullWidth = false,
}: ButtonProps) => {};
