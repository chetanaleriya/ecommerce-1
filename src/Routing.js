import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import Product from "./Product"
import Login from "./Login"
import "./routing.css"
import Electronics from "./Electronics"
import Womens from "./Womens"
import Mens from "./Mens"
import Jwellery from "./Jwellery"
import Map from "./Map"
import Register from "./Register"

function Routing()
{
    return(
        <div className="routing">
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}>Home</Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="Product" element={<Product></Product>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
            <Route path="Electronics" element={<Electronics></Electronics>}></Route>
            <Route path="Womens" element={<Womens></Womens>}></Route>
            <Route path="Mens" element={<Mens></Mens>}></Route>
            
            <Route path="Jwellery" element={<Jwellery></Jwellery>}></Route>
        </Routes>
        <Map></Map>
        <Footer></Footer>
        </BrowserRouter>
        </div>
    )
}
export default Routing