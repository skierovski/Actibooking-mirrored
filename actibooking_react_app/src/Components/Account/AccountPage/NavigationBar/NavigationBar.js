import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faCalendarDays,
  faLock,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  return (
    <>
      <div className={styles.Navigation}>
        <div
          className={styles.ButtonIcon}
          onClick={() => props.changeBody("default")}
        >
          <FontAwesomeIcon icon={faUser} /> User Panel
        </div>
        <div
          className={styles.ButtonIcon}
          onClick={() => props.changeBody("security")}
        >
          <FontAwesomeIcon icon={faLock} /> Security
        </div>
        <div
          className={styles.ButtonIcon}
          onClick={() => props.changeBody("courses")}
        >
          <FontAwesomeIcon icon={faCalendarDays} /> Your activities
        </div>
        <div className={styles.ButtonIcon}>
          <FontAwesomeIcon icon={faWallet} /> Payments
        </div>
        <div
          className={styles.ButtonIcon}
          onClick={() => props.changeBody("settings")}
        >
          <FontAwesomeIcon icon={faGear} /> Settings
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
