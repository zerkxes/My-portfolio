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
                            <h3>Consectetur adipiscing elit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.</p>
                            <h3>Ut enim ad minim </h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h3>Maecenas luctus at sem quis varius</h3>
                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl.</p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <img src={profil} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;