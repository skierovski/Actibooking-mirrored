import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
        <a href="link/" className={styles.links}>
          About us
        </a>
        <a href="link/" className={styles.links}>
          FAQ
        </a>
        <a href="link/" className={styles.links}>
          Privacy Policy
        </a>
        <a href="link/" className={styles.links}>
          How To
        </a>
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
