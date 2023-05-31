import React from "react";
import { FC } from "react"
import styles from './Title.module.scss';
import classNames from "classnames";

// step 4 нет enum

//  step 5
// прописываем props для Title
// импортируем import {FC} from "react";
// а также присваиваем props в const : FC <TitleProps>
// сразу же достаем их их props и получаем их в FC <TitleProps>

type TitleProps = {
    title: string;
};

//  step 6
// Далее необходимо все стилизовать
// а также импортируем import styles from 'Button.module.scss'
// также присваиваем стили с помощью className

// step 1
// компонент Title
// который возвращает сам Title, который является div
// передаем полученные props в App.tsx
// также присваиваем стили с помощью className

const Title: FC<TitleProps> = ({ title }) => {
    // return <div>Sing in (тут будет title)</div>
    return <div className={styles.title}>{title}</div>;
};

// step 2
// далее делаем export default
export default Title;

// step 3
// index.ts делаем export, чтобы потом его вызывать в App.tsx

