import Carousel from 'react-bootstrap/Carousel';
import image1 from "./image1.jpg"
import image2 from "./image2.jpeg"
import image3 from "./image3.webp"
import "./home.css"
function Home() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img src={image1} height={650} width="100%"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} height={550} width="100%"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} height={550} width="100%"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='div2'>
    <h1>Get your favourite for less, at Fashion Factory</h1>
    </div>
    </div>
  );
}

export default Home;