import React, { ReactElement } from "react";
import { FC } from "react";
import styles from './Tabs.module.scss';
import classNames from "classnames";

// step 4
// создаем enum, так как у нас несколько свойств Tabs
// не забываем для него export
export enum TabsTypes {
    All = 'all',
    Myfavorites = 'myfavorites',
    Popular = 'popular',
}

// step 5
// прописываем props для кнопочек
// импортируем import {FC} from "react";
// а также присваиваем props в const : FC <TabsProps>
// сразу же достаем их их props и получаем их в FC <TabsProps>
// ? - это необязательная props

type TabsProps = {
    type: TabsTypes;
    title: string;
    onClick: () => void;
    active?: boolean; // для состояния кнопочки и необязательная
    disabled?: boolean; // для состояния кнопочки и необязательная
}


// step 6
// Далее необходимо все стилизовать
// onClick - также впихнем в div
// то есть передали событие div, напрямую
// return <div onClick={onClick}>{title}</div>;
// а также импортируем import styles from 'Tabs.module.scss'
// также присваиваем стили с помощью className


// step 1
// компонент Tabs
// передаем полученные props в Tabslist, так как это wrapper для Tabs
// также присваиваем стили с помощью className
// const Tabs = (props) => {
//     const { type } = props;
//     return <div>Тут будут Tabs</div>
// };

const Tabs: FC<TabsProps> = ({ type, title, onClick, active, disabled }) => {
    const tabsStyle = styles[type]
    return <div onClick={!disabled ? onClick : undefined} 
    className={classNames(tabsStyle, {[styles.active]:active}, {[styles.disabled]:disabled})}>{title}</div>;
};

// step 2
// далее делаем export default
export default Tabs;

// step 3
// index.ts делаем export, чтобы потом его вызывать в App.tsx

