import React from 'react';
 const CartContext=React.createContext(
{
    item:[],
    totalAmount:0.0,
    count:0.0,
    addItem:()=>{},
    removeItem:()=>{}
}
 );
 export default CartContext;