import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./LogOutButton.module.css";
import CookiesContext from "../../../Context/cookies-context";

const LogOutButton = () => {

    const cookies_ctx = useContext(CookiesContext) 

    const removeCookieHandler = () => {
        cookies_ctx.RemoveCookie('token');
        setTimeout(()=>{
            window.location.reload();
        },100)
    }

    return(
        <Link to="/">
            <button className={styles.button} onClick={removeCookieHandler}>Log out</button>
        </Link>
    )
}

export default LogOutButton;