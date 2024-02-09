import { Link } from "react-router-dom"
import "./register.css"
function Register()
{
    return(
        <div className="register1">
            <div className="register2">
                <form>
                    <input type="text" placeholder="Enter Name"></input><br></br>
                    <br></br>
                    <input type="number" placeholder="Enter Mob No."></input><br></br>
                    <br></br>
                    <input type="email" placeholder="Enter Email"></input><br></br>
                    <br></br>
                    <input type="password" placeholder="Enter Password"></input><br></br>
                    <br></br>
                    <button>Submit</button>
                    <Link to="Login">Login Here</Link>
                </form>
            </div>
        </div>
    )
}
export default Register