import classes from './Header.module.css';
import {FaOpencart} from 'react-icons/fa';
import { useContext } from 'react';
import CartContext from '../../store/cartcontext';

const Cart=(props)=>{
    const cxt=useContext(CartContext);
    return(
        <div className={classes.cart} onClick={()=>props.cart(true)}> 
            <span><FaOpencart/></span>
            <span className={classes.numb}>{cxt.count}</span>
        </div>
    );
}
export default Cart;