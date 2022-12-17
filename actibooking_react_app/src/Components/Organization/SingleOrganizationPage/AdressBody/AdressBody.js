import styles from "./AdressBody.module.css";

const AdressBody = (props) => {
  const organizationAdress = props.organizationAdress;
  console.log("Addres");
  console.log(props);
  //Google map to add
  return (
    <div className={styles.adressContainer}>
      <p className={styles.address}>
        <span className={styles.address}>
          Kraj: {organizationAdress.country}
        </span>
        <span className={styles.address}>
          Miasto: {organizationAdress.zipcode} {organizationAdress.city}
        </span>
        <span className={styles.address}>
          Ulica: {organizationAdress.street} {organizationAdress.streetNumber}
        </span>
      </p>
    </div>
  );
};

export default AdressBody;
