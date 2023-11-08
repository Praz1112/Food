import { useContext } from 'react';
import CartContext from '../../store/cartcontext';
import Mitem from './Mitem';
import classes from './Model.module.css';

const Model=(props)=>{
    const cxt=useContext(CartContext);
    // console.log(cxt);
    return (
        <>
        <div className={classes.backdrop} onClick={()=>props.close(false)}>
           
        </div>
         <div className={classes.orders}>
            <h1>Your Orders!</h1>
          <div className={classes.list}>  
          <table>
            <tbody>
            {cxt.item.map((val)=>{return <Mitem key={val.id}value={val}/>})}
            </tbody>
          </table>
          </div> 
          <div className={classes.box}>
            <span><h3>Total Amount :₹{cxt.totalAmount}</h3></span>
            <span><button>Place Order</button></span>
          </div>
         </div>
         </>
    );
}

export default Model;