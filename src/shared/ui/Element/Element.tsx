import classNames from '@/shared/lib/helpers/classNames';
import cls from './Element.module.sass';
import ElementProps from './types';

export default function Element({ type = 'div', className, children, onClick, style }: ElementProps) {
    const Tag = type; 
    return (
        <Tag
            className={classNames(cls.Element, {}, [className || ''])}
            onClick={onClick}
            style={style}
        >
            {children}
        </Tag>
    );
}
