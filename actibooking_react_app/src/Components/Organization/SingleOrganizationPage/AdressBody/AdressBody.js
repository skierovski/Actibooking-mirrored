import styles from './AdressBody.module.css'

const AdressBody = (props) => {
    const organizationAdress = props.organizationAdress;
    //Google map to add
        return (
            <div className={styles.adressContainer}>
                {organizationAdress}
             </div>
        )
}

export default AdressBody;