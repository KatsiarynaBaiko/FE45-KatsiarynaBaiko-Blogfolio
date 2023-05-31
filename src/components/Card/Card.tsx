import React from "react";
import { FC } from "react";
import styles from './Card.module.scss';
import classNames from "classnames";
import { type } from "os";

import { DislikeIcon, DotsMenuIcon } from "../../assets/icons";
import { LikeIcon } from "../../assets/icons";
import { BookmarkIcon } from "../../assets/icons";
import { skipPartiallyEmittedExpressions } from "typescript";


// step 4
// создаем enum, так как у нас три свойства Card
// перечисление каких-либо фиксированных свойств
// не забываем export emun

export enum CardTypes {
    Large = 'large',
    Medium = 'medium',
    Small = 'small'
}

// step 5
// прописываем props для card
// прописываем не самостоятельно
// а по модели данных, которая пришла (файл с дз)
// импортируем import {FC} from "react";
// а также присваиваем props в const : FC <CardProps>
// сразу же достаем их их props и получаем их в FC <CardProps>

type CardProps = {
    type: CardTypes;
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num?: number,
    title: string,
    author?: number
}

// step 6
// Далее необходимо все стилизовать
// а также импортируем import styles from 'Button.module.scss'
// также присваиваем стили с помощью className 

// step 1
// компонент Card
// возврашает Card у которых есть три состояния: Large, Medium, Small

const Card: FC<CardProps> = ({ type, id, date, title, text, image, lesson_num, author }) => {
    // return <div>Тут будет Card</div>
    const cardStyle = styles[type]

    return (
        <div className={classNames(cardStyle)}>
            <div className={styles.cardContent}>
                <div className={styles.cardTextContent}>
                    <span className={styles.date}>{date}</span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardText}>{text}</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={image} alt="#" />
                </div>
            </div>
            <div className={styles.cardReaction}>
                <div className={styles.cardReationLikeDislike}>
                    <LikeIcon />
                    <DislikeIcon />
                </div>
                <div className={styles.cardReacrionNavigation}>
                    <BookmarkIcon />
                    <DotsMenuIcon />
                </div>
            </div>
        </div>
    )
}

// step 2
// далее делаем export default

export default Card;

// step 3
// index.ts делаем export, чтобы потом его вызывать в App.tsx