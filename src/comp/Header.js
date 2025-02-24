import react from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Headre=()=>{
    return(<>
        
    <headre className={styles.header}>
    <h1 className={styles.title}>Krishna</h1>
        <nav>
            <ul className={styles.navList}>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </ul>
        </nav>
    </headre>
    
    </>)
}

export default Headre;