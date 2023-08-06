import React, { useReducer } from 'react';
import CartContext from './Cart.context';
const defaultState = {
    item: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type == 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.value.price * action.value.amount
        const existingCartItemIndex = state.item.findIndex(item => item.id == action.value.id)
        const existingCartItem = state.item[existingCartItemIndex]
        let updatedArrItem;
        let updatedArr
        if (existingCartItem) {
            updatedArrItem = { ...existingCartItem, amount: existingCartItem.amount + action.value.amount }
            updatedArr = [...state.item]
            updatedArr[existingCartItemIndex] = updatedArrItem
        }
        else {
            updatedArr = state.item.concat(action.value)
        }

        return {
            item: updatedArr,
            totalAmount: updatedTotalAmount
        }
    }
    else if (action.type == 'REMOVE_ITEM') {
        const existingCartItemIndex = state.item.findIndex(item => item.id == action.value)
        const existingCartItem = state.item[existingCartItemIndex]
        let updatedArrItem;
        if (existingCartItem.amount === 1) {
            updatedArrItem = state.item.filter(item => item.id !== action.value)
        }
        else {
            let updatedItem={...existingCartItem, amount:existingCartItem.amount-1}
            updatedArrItem = [...state.item]
            updatedArrItem[existingCartItemIndex]=updatedItem
            // updatedArrItem=
        }

        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        return {
            item: updatedArrItem,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState
}
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)

    const addNewHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            value: item
        })
        console.log(cartState.item, cartState.totalAmount)
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            value: id
        })
    }
    const cartContext = {
        items: cartState.item,
        total: cartState.totalAmount,
        addItem: addNewHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{
            props.children}</CartContext.Provider>
    );
}

export default CartProvider;
