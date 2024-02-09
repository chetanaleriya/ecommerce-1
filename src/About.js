import aboutlogo from "./about logo.jpg"
import "./about.css"
function About()
{
    return(
        <div className="about1">
            <div className="about2">
                <h1>About Fashion Factory</h1>
                <p>Fashion Factory is India's leading chian of fashion discount stores; a Reliance retail format that promises a revolutionary shopping experience with exciting deals.</p>
                <p>We have something for every fashion tate, from trendy western wear to elegant Indian looks, from the perfect accessary to the best footwear, so you can shop EVERYTHING,at one stop.</p>
            </div>
            <div className="about3">
                <img src={aboutlogo} height={321} width={572}></img>
            </div>
        </div>
    )
}
export default About