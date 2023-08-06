import React, { useContext } from 'react';
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/Cart.context';
const MealItem = ({ name, price, desc,id }) => {
    const ctx= useContext(CartContext)
    const priceVal = `$${price}`
    const addCartHandler=(amount)=>{
        ctx.addItem({
            id:id,
            name:name,
            amount:amount,
            price:price
        })
    }
    return (
        <li className={style.meal}>
            <div  >
                <h3>{name}</h3>
                <div className={style.description}>{desc}</div>
                <div className={style.price}>{priceVal}</div>
            </div>
            <div>
            <MealItemForm onAddToCart={addCartHandler}id={name}/>
            </div>

        </li>
    );
}

export default MealItem;
