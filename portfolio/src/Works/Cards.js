import { Link } from 'react-router-dom';
import styles from './Cards.module.css'
function Cards() {
    return (
        <div className={styles.cardContainer} style={{textAlign: 'left'}}>
            <h6 style={{fontWeight: '700'}}>001/006</h6>
            <h3 style={{fontWeight: '900'}}>Frinfilla sit amet</h3>
            <p className='ptag'>Nulla Facilisi. Vivamus vestibulum elit in scelerisque ultricies</p>
            <br/>
            <button className={`btn btn-default ${styles.custombtn}`}>Default</button>
        </div>
    );
}
export default Cards;