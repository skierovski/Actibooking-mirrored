import styles from "./Navibar.module.css";
import ActibookingLogo from "../ActibookingLogo/ActibookingLogo";
import AuthContainer from "../Authorization/AuthContainer";

const Navibar = () =>{


    return(
        <div className={styles.navibar_container}>
            <ActibookingLogo/>
            <AuthContainer/>
        </div>
    )
}

export default Navibar;