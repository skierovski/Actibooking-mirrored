import styles from "./Navibar.module.css";
import ActibookingLogo from "./ActibookingLogo/ActibookingLogo";
import Authorization from "../Authorization/Authorization";

const Navibar = () =>{


    return(
        <div className={styles.navibar_main_container}>
            <div className={styles.navibar_container}>
                <ActibookingLogo/>
                <Authorization/>
            </div>
        </div>
    )
}

export default Navibar;