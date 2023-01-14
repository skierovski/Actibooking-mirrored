import styles from "./AdressBody.module.css";
import React from "react";
import Map from "./Map";
const AdressBody = (props) => {
  const organizationAdress = props.organizationAdress;
  const location = {
    address: `${organizationAdress.country} ${organizationAdress.zipcode} ${organizationAdress.city}, ${organizationAdress.street} ${organizationAdress.streetNumber} `,
  };

  return (
    <div className={styles.adressContainer}>
      {/* <p className={styles.address}>
        <span className={styles.address}>
          Kraj: {organizationAdress.country}
        </span>
        <span className={styles.address}>
          Miasto: {organizationAdress.zipcode} {organizationAdress.city}
        </span>
        <span className={styles.address}>
          Ulica: {organizationAdress.street} {organizationAdress.streetNumber}
        </span>
      </p> */}
      <Map address={location} />
    </div>
  );
};

export default AdressBody;