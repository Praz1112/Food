import { useContext} from "react";
import CartContext from "../../store/cartcontext";

// import classes from './Model.module.css';
const Mitem=(props)=>{
    const cxt=useContext(CartContext);
    const handleSub=()=>{
        cxt.removeItem(props.value)
    }
    return(
        <tr>
        <td><h2>{props.value.name}</h2></td>
        <td><h4>{props.value.count}X</h4></td>
        <td><button onClick={handleSub}>Sub</button></td>
        </tr>
    );
}
export default Mitem;