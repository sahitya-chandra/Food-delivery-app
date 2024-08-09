import { Navbar } from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/Placeorder"
import StoreContextProvider from "./context/StoreContext"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"


function App() {

  const [showlogin, setShowLogin] = useState(false);
  
  return (
    <BrowserRouter>
      <StoreContextProvider>
        {showlogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
        <div className="w-4/5 m-auto">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/order" element={<PlaceOrder />}/>
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </BrowserRouter>
  )
}

export default App
