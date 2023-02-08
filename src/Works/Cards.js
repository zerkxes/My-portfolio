import { Link } from 'react-router-dom';
import styles from './Cards.module.css'
function Cards(props) {
    return (
        <div className={styles.cardContainer} style={{ textAlign: 'left' }}>
            <h6 style={{ fontWeight: '700' }}>001/006</h6>
            <h3 style={{ fontWeight: '900' }}>{props.topic}</h3>
            <p className={styles.ptag}>{props.body}</p>
            <br />
            <Link to={props.link} style={{ textDecoration: 'none' }}><button className={`btn btn-default ${styles.custombtn}`}>Discover</button></Link>
        </div>
    );
}
export default Cards;