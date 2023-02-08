import Navs from '../Navbar/Navs';
import styles from './Work01.module.css'
import nvim from '../assets/images/nvim.jpg';
import neovim from '../assets/images/nvim.gif'
function Work01() {
    return (
        <div className={`container-fluid-md vh-100 vw-100 + ${styles.h2style}`} style={{ border: '10px solid black', overflow: 'auto' }}>
            <div className="container">
                <Navs style="light" border="black" />
            </div>
            <div className='container pt-3 mt-3 text-center'>
                <img src={nvim} alt='nvim' className='img-fluid' />
                <div className={`col-md-8 ${styles.cardContainer}`}>
                    <h2 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '35px' }}>
                        <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> 001 : Minimal Neovim IDE </span>
                    </h2>
                    <br />
                    <p>Neovim is a text editor. Minimal neovim IDE is a personal development environment based on top of Neovim as a text editor.
                        This ensures all the capabilities of Neovim with the benefits of an IDE customised to your needs while being very light on memory.
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
                    <p>Minimal neovim IDE has syntax highlighting, autocompletion, and error diagnostic features to name a few.
                        Checkout this project on my github repository
                    </p>
                    <a href="https://github.com/zerkxes/Minimal-Neovim-IDE" className='fa-icon ' style={{ padding: '10px' }}>
                        <i className='fa-brands fa-github' style={{ color: 'black' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Work01;