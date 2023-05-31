import classNames from "classnames";
import React, { ChangeEvent } from "react";
import { FC } from "react";
import styles from './Input.module.scss';

// step 4
// прорисываем props и типизируем
// в onChange если что-то передается в параментрах,
// то указываем параметры и их типы, то есть (value: string)

type InputProps = {
    title: string;
    placeholder: string;
    onChange: (value: string) => void;
    value: string;
    disabled?: boolean;
    errorText?: string;
    isTextarea?: boolean;
};

// step 1
// return null первоначально, чтобы ничего не возвращалось
// в скобочках передаем то, что будет у input
// и типизируем: InputProps
// ---
// создаем каркаc input: return <input onChange={onChange} value={value} placeholder={placeholder} />
// а также title, errorText
// импортируем пропсы через : FC<InputProps
// ---
// onChange подчеркивает красным, так как необходим e.tagret
// это решается через const onInputChang
// и передаем уже не {onChange}, а onInputChange, который принимает в себя event
// и event типизируем (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
// ---
// стилизуем все через добавление className={styles.input
// также вставляем intup в App.tsx
// <Input title={''} placeholder={''} onChange={()=>{}} value={''} />
// ---
// для texterea
// texterea - будет еще одна пропса
// => создаем еще одну const inputProps в которую помещаем общее, то есть совпадают
// => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)


const Input: FC<InputProps> = ({ title, errorText, placeholder, onChange, disabled, value, isTextarea}) => {
    // return null

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const inputProps = {
        onChange: onInputChange,
        value,
        placeholder,
        className: classNames(styles.input, {
            [styles.disabled]: disabled,
            [styles.errorInput]: errorText,
        }),
    };

    return (
        <div>
            <div className={styles.title}>{title}</div>
            {/* <input onChange={onChange} value={value} placeholder={placeholder} /> */}
            {/* <input
                onChange={onInputChange}
                value={value}
                placeholder={placeholder}
                className={classNames(styles.input, {
                    [styles.disabled]: disabled,
                    [styles.errorInput]: errorText,
                })} 
                /> */}
            {isTextarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
            {errorText && <div className={styles.errorText}>{errorText}</div>}
        </div>
    )
}

// step 2
export default Input