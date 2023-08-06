import React, { useRef } from 'react';
import style from "./MealItemForm.module.css";
import Input from '../../UI/Input';
const MealItemForm = ({ id,onAddToCart }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmt=+amtRef.current.value;
        amtRef.current.value++
      onAddToCart(enteredAmt)
    }
    const amtRef = useRef()
    return (
        <form className={style.form} onSubmit={submitHandler}>
            <Input ref={amtRef} label="Amount" input={{

                id: 'amount_' + id,
                type: 'number',
                min: 1,
                step: 1,
                max: 5,
                defaultValue: 1
            }} />
            <button> + Add</button>
        </form>
    );
}

export default MealItemForm;
