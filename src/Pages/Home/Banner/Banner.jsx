import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg01 from "../../../assets/images/banner01.jpg";
import bannerImg02 from "../../../assets/images/banner02.jpg";
import bannerImg03 from "../../../assets/images/banner03.jpg";
import bannerImg04 from "../../../assets/images/banner04.jpg";
import bannerImg05 from "../../../assets/images/banner05.jpg";
import bannerImg06 from "../../../assets/images/banner06.jpg";


const Banner = () => {
    return (
        <Carousel className=''>
            <div>
                <img  src={bannerImg01}  />
            </div>
            <div>
                <img src={bannerImg02}/>
            </div>
            <div>
                <img src={bannerImg03}/>
            </div>
            <div>
                <img  src={bannerImg04}  />
            </div>
            <div>
                <img src={bannerImg05}/>
            </div>
            <div>
                <img src={bannerImg06}/>
            </div>

        </Carousel>

    );
};

export default Banner;