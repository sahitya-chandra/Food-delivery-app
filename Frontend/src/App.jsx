import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/Placeorder"

function App() {
  
  return (
    <BrowserRouter>
      <div className="w-4/5 m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/order" element={<PlaceOrder />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
