import { useContext, useRef } from 'react';
import CartContext from '../../store/cartcontext';
import classes from './Layout.module.css';

const Item=(props)=>{
   const cxt=useContext(CartContext);
   const numb=useRef();
   const submitHandler=()=>{
    let count=parseInt(numb.current.value);
    if(isNaN(count))return
    const value={
      name:props.val.name,
      price:props.val.price,
      count:count,
      id:props.val.id
    };
    cxt.addItem(value);
    count=0;
    

   }
    return(
        <>
        <tr className={classes.item}>
          <td className={classes.name}><h2>{props.val.name}</h2></td>
          <td className={classes.price}><h4>₹{props.val.price}</h4></td>
          <td className={classes.adder}>
           <input ref={numb} type="number" min="0" placeholder='0'></input>
           <button onClick={submitHandler}>ADD</button>
          </td>
        </tr>
        </>
    );
}
export default Item;