import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Components/Cart";
import ProductPage from "./Pages/ProductPage";

const App = () => {

  const [cart, setCart ] = useState([]);
  
  const addToCart = (item) => {
    if(cart.some(element =>  element.name === item.name)){
       const updatedQuantity = cart.map(obj => {
          return(obj.name === item.name ? 
            {...obj, quantity: obj.quantity+=1} : obj);
       });
       setCart(updatedQuantity);
    }
    else{
      item.quantity = 1;
      setCart(prevCart => [...prevCart, item]);
    }
  }

  const updateQuantity = (e, item) => { 
    const { value } = e.target
    const updatecQuantity = cart.map(obj => {
      return obj.id === item.id ? {...obj, quantity: value} : obj
    })
    setCart(updatecQuantity);
  }

  const incrementQuantity = (item) => {
    const updatedQuantity = cart.map(obj => {
      return obj.id === item.id ? {...obj, quantity: obj.quantity +=1} : obj
    })
    setCart(updatedQuantity)
  }

  const decrementQuantity = (item) => {
    const currentCart = cart.filter(item => item.quantity >= 1);
    const updatedQuantity = currentCart.map(obj => {
      return obj.id === item.id ? {...obj, quantity: obj.quantity -=1} : obj
    })
    setCart(updatedQuantity)
  }
  
    return(
      <div data-testid="appDiv"> 
        <BrowserRouter>
            <Nav cart={cart}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/shop/:id' element={<ProductPage addToCart={addToCart}/>}/>
                <Route path='/cart' element={<Cart cart={cart} updateQuantity={updateQuantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}


export default App;
