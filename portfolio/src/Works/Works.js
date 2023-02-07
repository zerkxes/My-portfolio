import Navs from "../Navbar/Navs";
import Slides from "./Slides";
import styles from './Works.module.css'
function Works() {
    return (
        <div className="container-fluid-md vh-100" style={{ border: '10px solid black', overflow: 'hidden' }}>
            <div className="container">
                <Navs style="light" border="black" />
            </div>
            <div className="col-sm-8 py-5 justify-content-center offset-md-2 text-center">
                <h2 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '35px' }}>
                    <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> 02 : Works </span>
                </h2>
                <br></br>
                <p className={styles.pstyle}>If you are looking for a <span className={styles.fontW}>fullstack developer</span> with expertise in <span className={styles.fontW}>
                    Lua</span>, you've come to the right place
                    . Here are some of the projects I have dabbled in recently.</p>
            </div>
            <div className="container text-center">
                <Slides />
            </div>

        </div >
    )
}
export default Works;