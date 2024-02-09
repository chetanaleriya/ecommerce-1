import { Link } from "react-router-dom"
import Home from "./Home"
import "./Header.css"
import logo from "./logo.png"
import { Button } from "bootstrap"

function Header()
{
    return(
        <div className="header1">
            <div className="header2">
                <img src={logo} width="322px" height="56px"></img>
            </div>
            <div className="header3">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="product">All Product</Link></li>
                <li><div class="dropdown">
  <div class="btn1">Category
  <div class="dropdown-content"> 
  <Link to="Electronics">Electronics</Link>
  <Link to="Womens">Womens Clothing</Link>
  <Link to="Mens">Mens Clothing</Link>
  <Link to="Jwellery">Jwellery</Link>
  </div>
  </div>
</div></li>
                <li className="btn1"><Link to="register"><button>Register</button></Link></li>
                <li className="btn1"><Link to="Login"><button>Login</button></Link></li>
            </ul>
            </div>
        </div>
    )
}
export default Header