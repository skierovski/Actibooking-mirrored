import styles from "./Navibar.module.css";
import ActibookingLogo from "./ActibookingLogo/ActibookingLogo";
import Authorization from "../Authorization/Authorization";
import CookiesContext from "../../Context/cookies-context";
import { useContext } from "react";

const Navibar = () => {
    
    const cookie_ctx = useContext(CookiesContext);
    console.log(cookie_ctx.GetCookie("token"));

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