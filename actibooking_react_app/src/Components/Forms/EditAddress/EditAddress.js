import styles from "./EditAddress.module.css";
import { useContext, useRef, useState } from "react";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";

import AuthContext from "../../../Context/auth-context";
import CookiesContext from "../../../Context/cookies-context";

const EditAddress = (props) => {
  const enteredCountry = useRef();
  const enteredCity = useRef();
  const enteredZipcode = useRef();
  const enteredStreet = useRef();
  const enteredStreetNumber = useRef();
  const enteredFlatNumber = useRef();
  const [address, setAddress] = useState({
    country: props.Addresses.country,
    city: props.Addresses.city,
    zipcode: props.Addresses.zipcode,
    street: props.Addresses.street,
    streetNumber: props.Addresses.streetNumber,
    flatNumber: props.Addresses.flatNumber,
  });
  const auth_ctx = useContext(AuthContext);
  const cookies_ctx = useContext(CookiesContext);

  const onSubmitHandler = (event) => {
    console.log("test1");
    event.preventDefault();
    let userData = {
      id: props.id,
      country: enteredCountry.current.value,
      city: enteredCity.current.value,
      zipcode: enteredZipcode.current.value,
      street: enteredStreet.current.value,
      streetNumber: enteredStreetNumber.current.value,
      flatNumber: enteredFlatNumber.current.value,
    };
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
    console.log("test2");
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

  console.log(props.Addresses);
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.login_controls}>
        <div className={styles.login_control}>
          <label>country</label>
          <input
            ref={enteredCountry}
            required={true}
            value={address.country}
            onChange={dateChangeHandlerCountry}
          />
          <label>city</label>
          <input
            ref={enteredCity}
            required={true}
            value={address.city}
            onChange={dateChangeHandlerCity}
          />
          <label>zipcode</label>
          <input
            ref={enteredZipcode}
            required={true}
            value={address.zipcode}
            onChange={dateChangeHandlerZipCode}
          />
          <label>street</label>
          <input
            ref={enteredStreet}
            required={true}
            value={address.street}
            onChange={dateChangeHandlerStreet}
          />
          <label>streetNumber</label>
          <input
            ref={enteredStreetNumber}
            required={true}
            value={address.streetNumber}
            onChange={dateChangeHandlerStreetNumber}
          />
          <label>flatNumber</label>
          <input
            ref={enteredFlatNumber}
            required={true}
            value={address.flatNumber}
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
