import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/Cart.context';
const HeaderCartButton = ({ onClickCart }) => {
    const [buttonHighlighted,setButtonHighlighted]=useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfItems = cartCtx.items.reduce((cur, item) => {
       return cur = cur + item.amount
    }, 0)
    const btnClasses=`${styles.button} ${buttonHighlighted?styles.bump:''}`
    useEffect(()=>{
        if(cartCtx.items.length==0){
            return
        }
        setButtonHighlighted(true)
        const timer=setTimeout(() => {
            setButtonHighlighted(false)

        }, 300);
        return()=>{
            clearTimeout(timer)
        }
    },[cartCtx.items])
    return (
        <div>
            <button onClick={onClickCart} className={btnClasses}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={styles.badge}>{numberOfItems}</span>
            </button>
        </div>
    );
}

export default HeaderCartButton;
