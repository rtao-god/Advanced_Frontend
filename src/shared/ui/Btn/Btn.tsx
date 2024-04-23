import classNames from '@/shared/lib/helpers/classNames';
import cls from './Btn.module.sass';
import { useTheme } from '@/shared/lib/hooks/useTheme';

type BtnSize = 'small' | 'medium' | 'large';
type BtnColor = 'blue' | 'transparent' | 'green';

interface BtnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: BtnSize;
  color?: BtnColor;
}

const Btn: React.FC<BtnProps> = ({
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
      className={classNames(cls.Btn, { [cls[size]]: true, [cls[themeColor]]: true }, [className || ''])}
    >
      {children}
    </button>
  );
};

export default Btn