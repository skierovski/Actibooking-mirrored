import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.logo}>Actibooking</p>
        <p className={styles.copyright}>
          © Copyright 2022 Team-APA. All rights reserved.
        </p>
      </div>
      <div className={styles.link}>
        <Link to="link/" className={styles.links}>
          About us
        </Link>
        <Link to="link/" className={styles.links}>
          FAQ
        </Link>
        <Link to="link/" className={styles.links}>
          Privacy Policy
        </Link>
        <Link to="link/" className={styles.links}>
          How To
        </Link>
      </div>
      <div className={styles.privacy}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faInstagram} className={styles.social} />
          <FontAwesomeIcon icon={faTwitter} className={styles.social} />
          <FontAwesomeIcon icon={faFacebook} className={styles.social} />
          <FontAwesomeIcon icon={faGithub} className={styles.social} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
