import './App.css'
import ProductsPage from './pages/ProductsPage'

import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"

function App() {
  const [ token, setToken ] = useState(localStorage.getItem("token"));
  const [ cart, setCart ] = useState([]);
  console.log(cart);
  return (
    <div>
      <Navbar cart={cart} setCart={setCart} token={token} setToken={setToken} />
      <Routes>
        {/* <Route path="/posts" element={<Posts token={token} />} />
         */}

        <Route path="/productspage" element={<ProductsPage cart={cart} setCart={setCart} token={token} />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/register" element={<Register setToken={setToken}/>} />
      </Routes>
    </div>
 
  ) 
}

export default App