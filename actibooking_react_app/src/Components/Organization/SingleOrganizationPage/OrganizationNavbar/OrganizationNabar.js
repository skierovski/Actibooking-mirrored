import styles from './OrganizationNavbar.module.css'

const OrganizationNavbar = () =>{
        return(
            <div className={styles.OrganizationNavbar}>
                <div className={styles.listItem}>Courses</div>
                <div className={styles.listItem}>Adress</div>
                <div className={styles.listItem}>Description</div>
                <div className={styles.listItem}>Trainers</div>
            </div>
        )
}

export default OrganizationNavbar;