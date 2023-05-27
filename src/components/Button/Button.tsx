import { type } from "os";
import React, { ReactElement } from "react";
import { FC } from "react";
import styles from './Button.module.scss';
import classNames from "classnames";

// step 4
// создаем enum, так как у нас три свойства кнопки
// необходимо при перечислении каких-либо фиксированных свойств
export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',
    Error = 'error',
}

// step 5
// прописываем props для кнопочек
// импортируем import {FC} from "react";
// а также присваиваем props в const : FC <ButtonProps>
// так как есть иконочка- то это будет ReactElement
// сразу же достаем их их props и получаем их в FC <ButtonProps>
// ? - это необязательная props, например onClick ?: () => void;
type ButtonProps = {
    type: ButtonTypes;
    title: string | ReactElement;
    onClick: () => void;
    disabled?: boolean; // для состояния кнопочки и необязательная
}

// step 6
// Далее необходимо все стилизовать
// onClick - также впихнем в div
// то есть передали событие div, напрямую
// return <div onClick={onClick}>{title}</div>;
// а также импортируем import styles from 'Button.module.scss'
// также присваиваем стили с помощью className

// step 1
// компонент Button
// который возвращает саму кнопку Button, которая является div
// const Button = (props) => {
//     const {type} = props;
//     return <div>Тут будет кнопка</div>
// };
// или с деструктуризацией сокращенная запись
// передаем полученные props в App.tsx
// также присваиваем стили с помощью className

const Button: FC<ButtonProps> = ({ type, title, onClick, disabled }) => {
    // return <div>Тут будет кнопка</div>
    const buttonStyle = styles[type]
    // return <div onClick={onClick} className={styles.button}>{title}</div>;
    // return <div onClick={onClick} className={buttonStyle}>{title}</div>;
    // после визуализации и disabled импортируем classNames и используем в коде
    // return <div onClick={onClick} className={classNames(buttonStyle)}>{title}</div>;
    // далее принимаем элементы
    // для onClick прописываем условия для клика
    return <div onClick={!disabled ? onClick : undefined} 
    className={classNames(buttonStyle, {[styles.disabled]:disabled})}>{title}</div>;
};

// step 2
// далее делаем export default
export default Button;

// step 3
// index.ts делаем export, чтобы потом его вызывать в App.tsx