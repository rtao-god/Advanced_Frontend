import cls from './Button.module.sass';
import classNames from '@/shared/lib/classNames';
import { useTheme } from '@/shared/hooks/useTheme';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'blue' | 'transparent' | 'green';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: ButtonSize;
  color?: ButtonColor;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  size = 'medium',
}) => {
  const { theme } = useTheme();
  const themeColor = theme === 'dark' ? 'green' : 'blue';

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(cls.Button, { [cls[size]]: true, [cls[themeColor]]: true }, [className || ''])}
    >
      {children}
    </button>
  );
};

export default Button