import { useContext, useState } from "react";
import styles from "./EditAddress.module.css";
import AuthContext from "../../../Context/auth-context";
import CookiesContext from "../../../Context/cookies-context";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";

const EditAddress = (props) => {
  const [address, setAddress] = useState({
    id: props.id,
    country: props.Addresses.country,
    city: props.Addresses.city,
    zipcode: props.Addresses.zipcode,
    street: props.Addresses.street,
    streetNumber: props.Addresses.streetNumber,
    flatNumber: props.Addresses.flatNumber,
  });
  const cookies_ctx = useContext(CookiesContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userData = {
      id: props.Addresses.id,
      country: address.country,
      city: address.city,
      zipcode: address.zipcode,
      street: address.street,
      streetNumber: address.streetNumber,
      flatNumber: address.flatNumber,
    };
    if (userData.flatNumber == "brak") userData.flatNumber = null;
    console.log(userData);
    PutDataHandler(
      "https://localhost:7127/api/Adress",
      userData,
      cookies_ctx.GetCookie("token")
    );
  };
  const dateChangeHandlerCountry = (event) => {
    setAddress((prevState) => {
      return { ...prevState, country: event.target.value };
    });
  };

  const dateChangeHandlerCity = (event) => {
    setAddress((prevState) => {
      return { ...prevState, city: event.target.value };
    });
  };

  const dateChangeHandlerZipCode = (event) => {
    setAddress((prevState) => {
      return { ...prevState, zipcode: event.target.value };
    });
  };

  const dateChangeHandlerStreet = (event) => {
    setAddress((prevState) => {
      return { ...prevState, street: event.target.value };
    });
  };

  const dateChangeHandlerStreetNumber = (event) => {
    setAddress((prevState) => {
      return { ...prevState, streetNumber: event.target.value };
    });
  };

  const dateChangeHandlerstreetFlatNumber = (event) => {
    setAddress((prevState) => {
      return { ...prevState, flatNumber: event.target.value };
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.login_controls}>
        <div className={styles.login_control}>
          <label>country</label>
          <input
            required={true}
            value={address.country}
            onChange={dateChangeHandlerCountry}
          />
          <label>city</label>
          <input
            required={true}
            value={address.city}
            onChange={dateChangeHandlerCity}
          />
          <label>zipcode</label>
          <input
            required={true}
            value={address.zipcode}
            onChange={dateChangeHandlerZipCode}
          />
          <label>street</label>
          <input
            required={true}
            value={address.street}
            onChange={dateChangeHandlerStreet}
          />
          <label>streetNumber</label>
          <input
            required={true}
            value={address.streetNumber}
            onChange={dateChangeHandlerStreetNumber}
          />
          <label>flatNumber</label>
          <input
            required={true}
            value={address.flatNumber ?? "brak"}
            onChange={dateChangeHandlerstreetFlatNumber}
          />
        </div>
      </div>
      <div className={styles.login_actions}>
        <button className={styles.create_button} type="submit">
          Edit Address
        </button>
      </div>
    </form>
  );
};
export default EditAddress;
