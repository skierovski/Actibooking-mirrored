import styles from './ImageAndName.module.css'


const ImageAndName = (props) => {
    return(
        <div className={styles.ProfileImage}>
            <div className={styles.Image}>
                <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg' alt='Avatar'></img>
            </div>
            <div className={styles.NameBox}>
            <p className={styles.Name}>{props.data.firstName} {props.data.lastName}</p>
            </div>
        </div>
    )
}

export default ImageAndName;