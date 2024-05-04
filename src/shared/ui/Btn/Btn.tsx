import classNames from '@/shared/lib/helpers/classNames';
import cls from './Btn.module.sass';
import useTheme from '@/shared/lib/hooks/useTheme';
import BtnProps from './types';

export default function Btn({
  color,
  width = "100%",
  children,
  onClick = () => "",
  br,
  padding,
  disabled,
  border,
  textColor,
  height,
  type,
  fz,
  minW,
  className,
  size,
}: BtnProps) {
  const { theme } = useTheme();
  const themeColor = theme === 'dark' ? 'green' : 'blue';

  return (
    <button
      type={type}
      onClick={() => onClick()}
      className={classNames(cls.Btn, { [cls[themeColor]]: true }, [className || ''])}
    >
      {children}
    </button>
  );
};