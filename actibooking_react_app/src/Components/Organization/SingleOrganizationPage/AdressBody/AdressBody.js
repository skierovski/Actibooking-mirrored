import styles from "./AdressBody.module.css";
import GoogleMapReact from "google-map-react";

const AdressBody = (props) => {
  const organizationAdress = props.organizationAdress;
  const location = {
    address: `${organizationAdress.country} ${organizationAdress.zipcode} ${organizationAdress.city}, ${organizationAdress.street} ${organizationAdress.streetNumber} `,
  };
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

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        {/*         <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default AdressBody;
