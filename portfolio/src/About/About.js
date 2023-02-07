import Navs from "../Navbar/Navs";
import styles from './About.module.css';
import profil from '../assets/images/profil.jpg'
function About() {
    return (
        <div className={`container-fluid-md vh-100 vw-100 + ${styles.h2style}`} style={{ border: '10px solid black', overflow: 'auto' }}>
            <div className="container">
                <Navs style="light" border="black" />
            </div>

            <div className="col-sm-8 py-5 justify-content-center offset-md-2 text-center">
                <h2 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '35px' }}>
                    <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> 03 : About me </span>
                </h2>
            </div>
            <div className="row justify-content-center mx-0">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h3>Hey I'm Aniket Bose, a fullstack dev</h3>
                            <br/>
                            <p>Delving into the nitty-gritty nature of technology has always interested me and soon I was in the endless sea of Spring Framework and React.
                                Building things from mere scraps interests me so I spend my time balancing both hardware and software.
                            </p>
                            <br />
                            <p>My background in computer science has shaped the way I approach development.I like programming and overcoming technological hurdles.
                            </p>
                            <br />
                            <p>
                                I have done some work on crypto and robotics. If you like my site, don't hesitate to reach out.</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <img src={profil} alt="profil" className={`img-fluid + ${styles.profil}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;