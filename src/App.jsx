import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import "./Home.css"
import "./index.css"
import NonVeg from './Pages/NonVeg';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Veg from './Pages/Veg';
import Home from './Pages/Home';
import Dessert from './Pages/Dessert';
import Order from './Pages/Order';
import Login from './Login';
import Cart from './Pages/Cart';
import { Category } from "./Components/Category";
import CreateAccount from "./CreateAccount";
function App()
{

  return (
    <>


      <BrowserRouter>
      <Link/>
     < Category/>
     
        <header>

         
          
        </header>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg-items" element={<Veg />} />
          <Route path="/non-veg-items" element={<NonVeg />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/orders" element={<Order />} />
         
                <Route path="/:category" element={<store />} />
                <Route path="/:category/:subcategory" element={<store />} />
         
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;