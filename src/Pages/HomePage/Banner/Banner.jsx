import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'
import img1 from '../../../assets/Image/01.jpg'
import img2 from '../../../assets/Image/02.jpg'
import img3 from '../../../assets/Image/03.png'
import img4 from '../../../assets/Image/04.jpg'
import img5 from '../../../assets/Image/05.png'
import img6 from '../../../assets/Image/06.png'

function Banner() {
  return (
    <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true}>
    <div>
        <img src={img1} />
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={img2} />
        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
        <img src={img3} />
        {/* <p className="legend">Legend 3</p> */}
    </div>
    <div>
        <img src={img4} />
        {/* <p className="legend">Legend 4</p> */}
    </div>
    <div>
        <img src={img5} />
        {/* <p className="legend">Legend 5</p> */}
    </div>
    <div>
        <img src={img6} />
        {/* <p className="legend">Legend 6</p> */}
    </div>
</Carousel>
  )
}

export default Banner