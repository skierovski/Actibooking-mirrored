import styles from "./SingleOrganizationContainer.module.css";

const SingleOrganizationContainer = params =>{
    const organization = params.organization;
    return(
        <div className={styles.singleOrganizationContainer}>
            <div className={styles.mainDataContainer}>
                <div className={styles.imageContainer}><img alt="organization image" className={styles.image} src={organization.logoUrl}/></div>
                <div className={styles.mainInfoContainer}>
                    <div className={styles.nameContainer}>{organization.name}</div>
                    <div className={styles.adressContainer}>{organization.adresses}</div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>{organization.description}</div>
        </div>
    )
}
export default SingleOrganizationContainer;