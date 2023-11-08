import Item from './Item';
import classes from './Layout.module.css';
const items=[
  {
    name:"Parrota",
    price:15,
    id:"01"
  },
  {
   name:"Roti",
   price:10,
   id:"02"
  },
  {
    name:"Dosa",
    price:60,
    id:"03"
   },
   {
    name:"Veg Chilly",
    price:190,
    id:"04"
   },
   {
    name:"Veg Fried Rice",
    price:140,
    id:"05"
   },
   {
    name:"Lollipop",
    price:100,
    id:"06"
   },
   {
    name:"Tandoori",
    price:350,
    id:"07"
   },
   {
    name:"Mashroom",
    price:30,
    id:"08"
   }
   
   
];
const Layout=()=>{
    return(
        <div className={classes.layout}>
          <h1>Menu</h1>
          <div className={classes.menu}>
            <table>
              <tbody>
         { items.map(item=>{
              return <Item key={item.id} val={item} />
          })}
          </tbody>
          </table>
          
          </div>
        </div>
    );
}
export default Layout;