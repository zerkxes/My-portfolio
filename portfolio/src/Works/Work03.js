import Navs from "../Navbar/Navs";
import styles from './Work02.module.css';
import LMS2 from '../assets/images/TMS.jpg';
import neovim from '../assets/images/TMS.jpg';
function Work03() {
    return (
        <div className={`container-fluid-md vh-100 vw-100 + ${styles.h2style}`} style={{ border: '10px solid black', overflow: 'auto' }}>
            <div className="container">
                <Navs style="light" border="black" />
            </div>
            <div className='container pt-3 mt-3 text-center'>
                <img src={LMS2} alt='LMS2' className='img-fluid' style={{ borderRadius: '5px'}} />
                <div className={`col-md-8 ${styles.cardContainer}`}>
                    <h2 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '35px' }}>
                        <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> 003 : Todo Management System </span>
                    </h2>
                    <br />
                    <p>
                        A simple todo/routine management system to take care of your work, built using spring and jsp.
                         Add, update and remove your daily works as an when necessary.
                    </p>
                    <br />
                    <br />
                    <h3 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '25px', textAlign: 'left' }}>
                        <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> A demo </span>
                    </h3>
                    <br />
                    <img src={neovim} alt='neovim gif' className='img-fluid' style={{ borderRadius: '5px' }} />
                    <br />
                    <br />
                    <p>Built with security in mind to keep personal data private.
                    </p>
                    <a href="https://github.com/zerkxes/Minimal-Neovim-IDE" className='fa-icon ' style={{ padding: '10px' }}>
                        <i className='fa-brands fa-github' style={{ color: 'black' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Work03;