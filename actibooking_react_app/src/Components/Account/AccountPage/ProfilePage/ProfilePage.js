import styles from './ProfilePage.module.css'

const ProfilePage = () => {
    return(
        <>
        <div className={styles.ProfileImage}>
            <div className={styles.Image}>
                <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' alt='Avatar'></img>
            </div>
            <div>
            <p className={styles.Name}>Donald Tusk</p>
            </div>
        </div>
        <div className={styles.Information}>
            <ul>
                <li>
                    <strong>First and Last Name:</strong>
                    <span>Donald Tusk</span>
                </li>
                <li>
                <strong>E-mail</strong>
                    <span>Example@gmail.com</span>
                </li>
                <li>
                <strong>Card Information</strong>
                    <span>1234567890123456</span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default ProfilePage;