import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGear, faUser, faCalendarDays, faLock, faWallet} from '@fortawesome/free-solid-svg-icons'
import styles from './NavigationBar.module.css'

const NavigationBar = (props) => {
    return (
        <div className={styles.Navigation}>
                <div className={styles.ButtonIcon} onClick={() => props.changeBody("default")}>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className={styles.ButtonIcon} onClick={() => props.changeBody("security")}>
                    <FontAwesomeIcon icon={faLock}/>
                </div>
                <div className={styles.ButtonIcon} onClick={() => props.changeBody("courses")}>
                    <FontAwesomeIcon icon={faCalendarDays}/>
                </div>
                <div className={styles.ButtonIcon}>
                    <FontAwesomeIcon icon={faWallet}/>
                </div>
                <div className={styles.ButtonIcon} onClick={() => props.changeBody("settings")}>
                    <FontAwesomeIcon icon={faGear}/>
                </div>
            </div>
    )
}

export default NavigationBar;