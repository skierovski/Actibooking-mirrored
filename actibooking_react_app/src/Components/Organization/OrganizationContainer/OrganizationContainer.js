import styles from "./OrganizationContainer.module.css";
import  { Redirect } from 'react-router-dom';

const OrganizationContainer = (props) => {
    return(
        <div className={styles.mainOrganizationContainer}>
            <div className={styles.organizationLogoContainer}><img alt="organization_image" className={styles.image} src={props.logoUrl}/></div>
            <div className={styles.organizationData}>
                <div className={styles.organizationNameContainer}>{props.name}</div>
                <div className={styles.organizationAdressContainer}>{props.adress}</div>
            </div>
        </div>
    )

}

export default OrganizationContainer;