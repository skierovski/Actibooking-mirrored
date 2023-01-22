import { useContext, useEffect, useState } from "react";
import styles from "./AccountInfoContainer.module.css";
import AccountContext from "../../../Context/account-ctx";
import Input from "../../DefaultModels/Input/Input";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import { useRef } from "react";
import { BiEdit } from "react-icons/bi";
import Button from "../../DefaultModels/Buttons/Button";
import { Link } from "react-router-dom";
const OrganizationInfoContainer = () => {
  const enteredFirstName = useRef();
  const enteredLastName = useRef();
  const enteredBirthDate = useRef();
  const enteredGender = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const account_ctx = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    let data = {
      ActiBookingUserId: account_ctx.userData.id,
      firstName: enteredFirstName.current.getValue(),
      lastName: enteredLastName.current.getValue(),
      birthDate: enteredBirthDate.current.getValue(),
      gender: enteredGender.current.getValue(),
    };
    setIsDisabled(true);
    PutDataHandler("https://localhost:7127/api/User", data);
  };

  return (
    <div className={styles.Settings}>
      <Button
          value="View details"
          href={`/Edit/Organization/6`}
          containerStyle="button-container-organization"
        />
    </div>
  );
};

export default OrganizationInfoContainer;
