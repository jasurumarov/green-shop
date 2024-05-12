import './scss/style.scss'
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import CartRouter from "./router/cartRouter/CartRouter";

// Components
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="cart" element={<CartRouter/>}>
          <Route index element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Route>
      </Routes> 
    </>
  )
}

export default App
