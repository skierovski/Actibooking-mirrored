import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import styles from "./SingleOrganizationContainer.module.css";

const SingleOrganizationContainer = params =>{
    const organization = params.organization;
    return(
        <div className={styles.singleOrganizationContainer}>
            <div className={styles.imageDataContainer}>
                <div className={styles.imageContainer}><img alt="organization image" className={styles.image} src={organization.logoUrl}/></div>
            </div>
            <div className={styles.mainInfoContainer}>
                    <div className={styles.nameContainer}>{organization.name}</div>
                    <div className={styles.adressContainer}>{organization.adresses}</div>
            </div>
            <div className={styles.descriptionContainer}>
            <SectionTitle value="Description"/>
            <div className={styles.descriptionSection}>
                <div className={styles.description}>{organization.description}</div>
            </div>
            </div>
        </div>
    )
}
export default SingleOrganizationContainer;