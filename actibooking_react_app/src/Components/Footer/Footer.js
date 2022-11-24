import styles from './Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.logo}>
                <p>Actibooking</p>
                </div>
                <p>© 2022 Actibooking Inc. All rights reserved.</p>
            </div>
            <div className={styles.link}>
                <p>About us</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>How To</p>
                </div>
            <div className={styles.privacy}>
                <div className={styles.icons}>
                <FontAwesomeIcon icon={faInstagram} className={styles.social}/>
                <FontAwesomeIcon icon={faTwitter} className={styles.social}/>
                <FontAwesomeIcon icon={faFacebook} className={styles.social}/>
                <FontAwesomeIcon icon={faGithub} className={styles.social}/>
                </div>
            </div>

        </div>
    )
}

export default Footer;