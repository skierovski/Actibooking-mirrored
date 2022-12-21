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
  const[ address, setAddress] = useState({
    country: props.Addresses.country,
  });
  const auth_ctx = useContext(AuthContext);
  const cookies_ctx = useContext(CookiesContext);

  const onSubmitHandler = (event) => {
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
  const dateChangeHandler = (event) =>{setAddress((prevState) => {
    return {...prevState, country: event.target.value};
})};
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
            onChange={dateChangeHandler}
          />
          <label>city</label>
          <input
            ref={enteredCity}
            required={true}
            value={props.Addresses.city}
          />
          <label>zipcode</label>
          <input
            ref={enteredZipcode}
            required={true}
            value={props.Addresses.zipcode}
          />
          <label>street</label>
          <input
            ref={enteredStreet}
            required={true}
            value={props.Addresses.street}
          />
          <label>streetNumber</label>
          <input
            ref={enteredStreetNumber}
            required={true}
            value={props.Addresses.streetNumber}
          />
          <label>flatNumber</label>
          <input
            ref={enteredFlatNumber}
            required={true}
            value={props.Addresses.flatNumber}
          />
        </div>
      </div>
      <div className={styles.login_actions}>
        <button className={styles.create_button} type="submit">
          Save Address
        </button>
      </div>
    </form>
  );
};
export default EditAddress;
