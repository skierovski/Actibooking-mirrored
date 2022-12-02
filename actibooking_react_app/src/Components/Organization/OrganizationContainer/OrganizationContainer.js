import styles from "./OrganizationContainer.module.css";
import  { Link } from 'react-router-dom';

const OrganizationContainer = (props) => {
    return(
        <div className={styles.mainOrganizationContainer}>
            <div className={styles.organizationLogoContainer}><img alt="organization_image" className={styles.image} src={props.logoUrl}/></div>
            <div className={styles.organizationData}>
                <div className={styles.organizationNameContainer}><Link className={styles.linkName} to={`/Organizations/${props.id}`}>{props.name}</Link></div>
                <div className={styles.organizationAdressContainer}>{props.adress}</div>
            </div>
        </div>
    )

}

export default OrganizationContainer;