import React from "react";

import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
 
 function App() {
  return (
    <div style={{ backgroundColor :"whitesmoke" }}>
      <CartProvider>
      <Home/>
      <Cart />
      </CartProvider>
    </div>
  )
}

export default App;