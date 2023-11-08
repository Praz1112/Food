import { useState } from "react";
import CartContext from "./cartcontext"

const CartProvider=(props)=>{
    const[values,setvalues]=useState([]);
    const AddItemHandler=(item)=>{
        let temp=values.filter(val=>{
            return val.name===item.name;
        });
        if(temp.length>0){
            values.forEach((val)=>{
                if(val.name===item.name)val.count+=item.count;
            })
        }else{
        const val=[...values,item];
       setvalues(val);
        }
    }
    const RemoveItemHandler=(item)=>{
        
     if(item.count===1){
        let value=values.filter(val=>{
            return val.name!==item.name;
        });
        setvalues(value);
     }else{
        values.forEach((val)=>{
            if(val.name===item.name){val.count-=1;}
        })
     }
    }
    let amount=0;
    values.forEach((val)=>{amount+=(val.count*val.price)});
    let c=0;
     values.forEach((val)=>{c+=val.count});
const defaultVal={
    item: values,
    totalAmount:amount,
    count:c,
    addItem: AddItemHandler,
    removeItem:RemoveItemHandler,

};
    return<CartContext.Provider value={defaultVal}>
       {props.children}
    </CartContext.Provider>
}

export default CartProvider;