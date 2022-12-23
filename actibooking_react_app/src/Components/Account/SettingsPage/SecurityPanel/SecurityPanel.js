import styles from './SecurityPanel.module.css';

const SecurityPage = () =>{
    return(
        <>
        <div className={styles.Security}>
        <div className={styles.ChangePassword}>
        <button>Change Password</button>
        </div>
        <div className={styles.ChangeEmail}>
        <button>Change Email</button>
        </div>
        </div>
        </>
    )
}
export default SecurityPage;