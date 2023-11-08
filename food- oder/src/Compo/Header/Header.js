import classes from './Header.module.css';
import Cart from './Cart';
const Header=(props)=>{
    return(
        <>
        <div  className={classes.header}>
        <div className={classes.logo_name}>
        <span><h1>YourMeals</h1></span>
        </div>
        <Cart cart={props.cart}/>
      </div>
        </>
    );
}
export default Header;