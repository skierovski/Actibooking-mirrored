import styles from "./ActibookingLogo.module.css";
import { Link } from "react-router-dom";

const ActibookingLogo = () =>{


    return(
        <div className={styles.ActibookingLogo_container}>
            <Link to={'/'} className={styles.ActibookingLogo}>ActiBooking</Link>
        </div>
    )
}

export default ActibookingLogo;