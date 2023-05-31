import React from "react";
import { FC } from "react";
import styles from './Username.module.scss';


// step 4
type UsernameProps = {
    username: string;
};

// step 5
// стилизуем с помощью styles

// step 1
// {username[0]} - так как по правилам нельзя написать имя и фамиоию раздельно
// только через нижнее подчеркивание
// поэтому берем первую букву
// также ставим проверку, чтобы ничего не легло

const Usermane: FC<UsernameProps> = ({ username }) => {
    // return <div></div>

    if (!username) {
        return null
    }

    return <div className={styles.container}>
        <div className={styles.initials}>{username[0]}</div>
        <div className={styles.username}>{username}</div>
    </div>
}

// step 2
export default Usermane