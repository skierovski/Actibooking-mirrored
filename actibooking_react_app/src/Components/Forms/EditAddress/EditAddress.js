import { useContext, useState } from "react";
import styles from "./EditAddress.module.css";
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
    if (userData.flatNumber == "brak") userData.flatNumber=null;
    PutDataHandler(
      "https://localhost:7127/api/Adress",
      userData,
      cookies_ctx.GetCookie("token")
    );
  };
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.login_controls}>
        <div className={styles.login_control}>
          <label>country</label>
          <input
            required={true}
            value={address.country}
            onChange={e=>setAddress(prevState => {return{ ...prevState, country: e.target.value}})}
          />
          <label>city</label>
          <input
            required={true}
            value={address.city}
            onChange={e=>setAddress(prevState => {return{ ...prevState, city: e.target.value}})}
          />
          <label>zipcode</label>
          <input
            required={true}
            value={address.zipcode}
            onChange={e=>setAddress(prevState => {return{ ...prevState, address: e.target.value}})}
          />
          <label>street</label>
          <input
            required={true}
            value={address.street}
            onChange={e=>setAddress(prevState => {return{ ...prevState, street: e.target.value}})}
          />
          <label>streetNumber</label>
          <input
            required={true}
            value={address.streetNumber}
            onChange={e=>setAddress(prevState => {return{ ...prevState, streetNumber: e.target.value}})}
          />
          <label>flatNumber</label>
          <input
            required={true}
            value={address.flatNumber??"brak"}
            onChange={e=>setAddress(prevState => {return{ ...prevState, flatNumber: e.target.value }})}
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
