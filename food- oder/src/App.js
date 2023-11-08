import './App.css';
import headImg from './Img/head_img.jpg'
import Header from './Compo/Header/Header';
import Layout from './Compo/Layout/Layout';
import { useState } from 'react';
import Model from './Compo/Modal/Modal';
import CartProvider from './store/CartProvider';

function App() {
  const[cartClicked,setCart]=useState(false);
  return (
  <CartProvider>
  {cartClicked&&<Model close={setCart}/>}
  <Header cart={setCart}/>
  <img src={headImg} alt="welcome Foodies !!! :)"></img>
  <Layout/>
  </CartProvider>
  );
}

export default App;
