import { useContext, useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom';
import styles from "./EditAddress.module.css";
import CookiesContext from "../../../Context/cookies-context";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import Input from "../../DefaultModels/Input/Input";
import SuccessfullyRegisteredModal from "../../Authorization/AuthorizationModals/SuccessfullyRegisteredModal";

const EditAddress = (props) => {
  const cookies_ctx = useContext(CookiesContext);
  const enteredCountry = useRef();
  const enteredCity = useRef();
  const enteredZipCode = useRef();
  const enteredStreet = useRef();
  const enteredStreetNumber = useRef();
  const enteredFlatNumber = useRef();

  const[isSuccessfull, setIsSuccessfull] = useState()
  useEffect(()=>{
  enteredCountry.current.setDefaultValue(props.Addresses.country);
  enteredCity.current.setDefaultValue(props.Addresses.city);
  enteredZipCode.current.setDefaultValue(props.Addresses.zipcode);
  enteredStreet.current.setDefaultValue(props.Addresses.street);
  enteredStreetNumber.current.setDefaultValue(props.Addresses.streetNumber);
  props.Addresses.flatNumber ? enteredFlatNumber.current.setDefaultValue(props.Addresses.flatNumber) : enteredFlatNumber.current.setDefaultValue("brak");
  },[])

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userData = {
      id: props.Addresses.id,
      country: enteredCountry.current.getValue(),
      city: enteredCity.current.getValue(),
      zipcode: enteredZipCode.current.getValue(),
      street: enteredStreet.current.getValue(),
      streetNumber: enteredStreetNumber.current.getValue(),
      flatNumber: enteredFlatNumber.current.getValue(),
    };
    if (userData.flatNumber == "brak") userData.flatNumber=null;
    console.log(userData)
    PutDataHandler(
      "https://localhost:7127/api/Adress",
      userData,
      cookies_ctx.GetCookie("token")
    );
    setIsSuccessfull(true)
  };
  
  return (
    <>
    {isSuccessfull && ReactDOM.createPortal(<SuccessfullyRegisteredModal closeModal={() => setIsSuccessfull(false)}/>, document.getElementById("modal-root"))}
    <form onSubmit={onSubmitHandler}>
      <div className={styles.login_controls}>
        <div className={styles.login_control}>
          <Input
            label="Country"
            required={true}
            ref ={enteredCountry}
          />
          <Input
            label="City"
            required={true}
            ref={enteredCity}
          />
          <Input
            label="ZipCode"
            required={true}
            ref={enteredZipCode}
          />
          <Input
            label="Street"
            required={true}
            ref={enteredStreet}
          />
          <Input
            label="Street number"
            required={true}
            ref={enteredStreetNumber}
          />
          <Input
            label="Flat number *"
            required={true}
            ref={enteredFlatNumber}
          />
        </div>
      </div>
      <div className={styles.login_actions}>
        <button className={styles.create_button} type="submit">
          Edit Address
        </button>
      </div>
    </form>
    </>
  );
};
export default EditAddress;
