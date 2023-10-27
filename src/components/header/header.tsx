import React from 'react';
import s from './header.module.css'

type DateTypeProps = {
    date: string | null
}

const Header = ({date}: DateTypeProps) => {

    return (
        <div className={s.container}>
            <span className={s.text}>{`Информация о курсе валют на: ${date}`}</span>
        </div>
    );
};

export default Header;