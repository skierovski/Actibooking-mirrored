import styles from "./AuthContainer.module.css";
import Authorization from "./Authorization";

const AuthContainer = () =>{


    return(
        <div className={styles.AuthContainer}>
            <Authorization/>
        </div>
    )
}

export default AuthContainer;