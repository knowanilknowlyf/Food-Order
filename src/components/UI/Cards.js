import React from 'react';
import style from './Cards.module.css'
const Cards = (props) => {
    return (
        <div className={style.card}>
            {props.children}
        </div>
    );
}

export default Cards;
