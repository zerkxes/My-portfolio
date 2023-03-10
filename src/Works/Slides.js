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
            <div className={styles.imgfilter + ' col-md-12 '} ><Link to='/work01'>
                <img src={work1} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards topic={'Minimalistic Neovim IDE'} body={'A custom built IDE for lightweight development at super fast speeds'} link='/work01'/>
                </div>
            </div>
            <div className={styles.imgfilter + ' col-md-12'} ><Link to='/work02'>
                <img src={work2} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards topic={'Library Management System'} body={'A complete library management system with plenty of features'} link='/work02'/>
                </div>
            </div>
            <div className={styles.imgfilter + ' col-md-12'} ><Link to='work03'>
                <img src={work3} className='img-fluid px-4' />
            </Link>
                <div className="col-md-6 bg-light" style={{ position: 'relative', margin: 'auto', transform: 'translate(0%, -50%)' }}>
                    <Cards topic={'Todo Management System'} body={'A simple Todo management system for daily use '} link='/work03'/>
                </div>
            </div>

        </Carousel>
    );
}
export default Slides;