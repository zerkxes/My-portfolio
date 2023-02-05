import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import work1 from '../assets/images/work01-hover.jpg';
import work2 from '../assets/images/work02-hover.jpg';
import work3 from '../assets/images/work03-hover.jpg';
import { Link } from 'react-router-dom';
import Cards from "./Cards";
import styles from './Works.module.css'
function Slides() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
            // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
            // optional, default to 1.
        }
    };
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={false}
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <div className={styles.imgfilter + ' col-md-12 '} ><Link to=''>
                <img src={work1} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards />
                </div>
            </div>
            <div className={styles.imgfilter + ' col-md-12'} ><Link to=''>
                <img src={work2} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards />
                </div>
            </div>
            <div className={styles.imgfilter + ' col-md-12'} ><Link to=''>
                <img src={work3} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards />
                </div>
            </div>

        </Carousel>
    );
}
export default Slides;