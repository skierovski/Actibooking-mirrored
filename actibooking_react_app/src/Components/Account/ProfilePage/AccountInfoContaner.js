import { useContext, useEffect, useState } from 'react';
import styles from  './AccountInfoContainer.module.css';
import AccountContext from '../../../Context/account-ctx';
import Input from '../../DefaultModels/Input/Input';
import PutDataHandler from '../../FetchMethods/PutMethods/PutDataHandler';
import { useRef } from 'react';
import {BiEdit} from "react-icons/bi";

const AccountInfoContainer = () =>{
  const enteredFirstName = useRef();
  const enteredLastName = useRef();
  const enteredBirthDate = useRef();
  const enteredGender= useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const account_ctx = useContext(AccountContext);

  useEffect(()=>{
    enteredFirstName.current.setDefaultValue(account_ctx.userData.firstName);
    enteredLastName.current.setDefaultValue(account_ctx.userData.lastName);
    enteredBirthDate.current.setDefaultValue(account_ctx.userData.birthDate);
    enteredGender.current.setDefaultValue(account_ctx.userData.gender);
  },[account_ctx.userData.id]);
  
  const onSubmit = event => {
    event.preventDefault();
    let data = {
        ActiBookingUserId: account_ctx.userData.id,
        firstName:enteredFirstName.current.getValue(),
        lastName:enteredLastName.current.getValue(),
        birthDate:enteredBirthDate.current.getValue(),
        gender:enteredGender.current.getValue(),
    };
    setIsDisabled(true);
    PutDataHandler("https://localhost:7127/api/User", data);
};


    return(
      <div className={styles.Settings}>
        <div className={styles.editButton}><BiEdit className={styles.editButtonIcon} size={30} onClick={()=>setIsDisabled(!isDisabled)}/></div>
        <form onSubmit={onSubmit}>
            <div className={styles.Inputs}>
              <div className={styles.InputRow}>
                  <Input label={"First name"} ref={enteredFirstName} readOnly={isDisabled}/>
              </div>
              <div className={styles.InputRow}>
                  <Input label={"Last name"} ref={enteredLastName} readOnly={isDisabled}/>
              </div>
              <div className={styles.InputRow}>
                  <Input type={'date'} label={"Birth date"} ref={enteredBirthDate} readOnly={isDisabled}/>
              </div>
              <div className={styles.InputRow}>
                  <Input type={"select"} label={"Gender"} ref={enteredGender} options={["male", "female", "undefined"]} disabled={isDisabled}/>
              </div>
            </div>
            {!isDisabled && <button className={styles.saveChangesButton} type="submit">Save Changes</button>}
        </form>
    </div>
    )
}

export default AccountInfoContainer;