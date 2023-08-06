import React, { useContext } from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/Cart.context';
import CartItem from './CartItem';
const Cart = (props) => {
    const ctx=useContext(CartContext)
    const hasItems=ctx.items.length>0
    const cartItemAddHandler=item=>{
        
        ctx.addItem(item)
    }
    const cartItemRemoveHandler=id=>{
        ctx.removeItem(id)
    }
    const cartItem = <ul className={classes['cart-items']}>
        {console.log(ctx.items)}
        {ctx.items.map(item => 
        <CartItem key={item.id} price={item.price} name={item.name} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)
    } onAdd={cartItemAddHandler.bind(null,item)}>

    </CartItem>)}
    </ul>
    return (
        <Modal onHide={props.onCartHide}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span><span>{`$${ctx.total.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCartHide}> Close </button>
            {hasItems&&<button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;
