import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faCalendarDays,
  faLock,
  faWallet,
  faPeopleGroup,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavigationBar.module.css";
import { useCookies } from "react-cookie";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [cookies, setCookies, removeCookie] = useCookies();
  console.log(props);
  const children = props.data.children;
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
        {children.length > 0 &&(
          <div
            className={styles.ButtonIcon}
            onClick={() => props.changeBody("childs")}
          >
            <FontAwesomeIcon icon={faPeopleGroup} /> Childs
          </div>
        )}
        {props.data.isTrainer && (
          <div
            className={styles.ButtonIcon}
            onClick={() => props.changeBody("trainer")}
          >
            <FontAwesomeIcon icon={faPersonRunning} /> Trainer Page
          </div>
        )}
        <div className={styles.logOutIconContainer}>
          <Link to={"/"} className={styles.LogOutIcon} onClick={() => removeCookie('token')}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Log out
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
