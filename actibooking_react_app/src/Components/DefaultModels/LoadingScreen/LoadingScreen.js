import styles from './LoadingScreen.module.css';
import {AiOutlineLoading} from "react-icons/ai";

const LoadingScreen = () => {
    return(
        <div className={styles.loadingScreen}>
            <AiOutlineLoading className={styles.loadingScreenIcon} size={100}/>
        </div>
    )
}

export default LoadingScreen;