import classNames from '@/shared/lib/helpers/classNames';
import cls from './Btn.module.sass';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import BtnProps from './types';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { motion } from "framer-motion";

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
  const themeColor = theme === Theme.DARK ? 'green' : 'blue';

  return (
    <motion.button
      className={classNames(cls.Btn, { [cls[themeColor]]: true }, [className || ''])}
      type={type}
      style={{
        fontSize: fz,
        width,
        borderRadius: br,
        padding,
        height,
        minWidth: minW,
      }}
      whileHover={{ boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.7)" }}
      whileTap={{ boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.7)" }}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </motion.button>
  );
};
