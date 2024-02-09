import { Link } from "react-router-dom"
import map from "./map.jpeg"

function Map()
{
    return(
        <div>
            <Link to="https://maps.app.goo.gl/bfWAbrYUHSFAqjSZ7?g_st=ic"><img src={map} width="100%" height={500} ></img></Link>
        </div>
    )
}
export default Map