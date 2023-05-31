import React from "react";
import { FC } from "react";
import styles from './Tabslist.module.scss';
import classNames from "classnames";

// сюда импортируем наш  Tabs
// Tabslist - это wapper для Tabs
import Tabs from '../Tabs';
import { TabsTypes } from '../Tabs';

// step 1
// компонент Tabslist, возвращает Tabslist с Tabs

const Tabslist = () => {
    return (
        <div>
            <div className={classNames(styles.tabsList)}>
                <Tabs active type={TabsTypes.All} title={'All'} onClick={() => { }} />
                <Tabs type={TabsTypes.Myfavorites} title={'My favorites'} onClick={() => { }} />
                <Tabs type={TabsTypes.Popular} title={'Popular'} onClick={() => { }} />
            </div>
            <div className={classNames(styles.tabsList)}>
                <Tabs active type={TabsTypes.All} title={'All'} onClick={() => { }} />
                <Tabs type={TabsTypes.Myfavorites} title={'My favorites'} onClick={() => { }} />
                <Tabs type={TabsTypes.Popular} title={'Popular'} onClick={() => { }} />
            </div>
            <div className={classNames(styles.tabsList)}>
                <Tabs active type={TabsTypes.All} title={'All'} onClick={() => { }} />
                <Tabs type={TabsTypes.Myfavorites} title={'My favorites'} onClick={() => { }} />
                <Tabs disabled type={TabsTypes.Popular} title={'Popular'} onClick={() => { }} />
            </div>

        </div>
    )
}


// step 2
// далее делаем export default
export default Tabslist;

// step 3
// index.ts делаем export, чтобы потом его вызывать в App.tsx

// step 4, 5 - нет