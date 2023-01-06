import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import styles from "./ProfilePage.module.css";
import React, { useContext, useState } from "react";
import Modal from '../../DefaultModels/Modals/Modal';
import AccountInfoContainer from "./AccountInfoContaner";
import AccountContext from "../../../Context/account-ctx";
import SignUpPostDataHandler from "../../FetchMethods/PostMethods/SignUpPostDataHandler";
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import ApiCalendar from 'react-google-calendar-api';

const ProfilePage = () => {
  const account_ctx = useContext(AccountContext);
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const children = account_ctx.userData.children ? account_ctx.userData.children : null;
  const isTrainer = account_ctx.userData.isTrainer;

  const onSubmitChild = (data) => {
    const addChildObject = {
      actiBookingUserId: account_ctx.userData.id,
      name: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate
    }
    SignUpPostDataHandler("https://localhost:7127/api/User/add-child", addChildObject)
  }

  const onSubmitTrainer = () => {
    SignUpPostDataHandler(`https://localhost:7127/api/Trainers/${account_ctx.userData.id}`)
  }

  return (
    <>
      <div className={styles.Information}>
        {modal  && <>
          {ReactDOM.createPortal(<Modal title="Add child" close={() => setModal(false)}>
      <form onSubmit={handleSubmit(onSubmitChild)}>
      <label>First name:</label>
        <input {...register("firstName")}></input>
        <label>Last name:</label>
        <input {...register("lastName")}></input>
        <label>Birth Date:</label>
        <input type='date' {...register("birthDate")}></input>
        <input type="submit" />
      </form>
      </Modal>, document.getElementById("modal-root"))}
        {ReactDOM.createPortal(<Backdrop close={() => setModal(false)}/>, document.getElementById('backdrop-root'))}
        </>
      }
      <AccountInfoContainer></AccountInfoContainer>
      </div>
      <div className={styles.TrainerChilds}>
          <div className={styles.Childs}>  
          {children?
          <>
          {children.map(o => (
            <div>{o.name} {o.lastName}</div>
          ))}
            <button className={styles.ProfileButton} onClick={() => setModal(true)} value="Add child">+ Add Child</button>
            </>
             : 
             <>
             <div>No added childs yet</div>
             <button className={styles.ProfileButton} onClick={() => setModal(true)} value="Add child">+ Add Child</button>
             </>}
          </div>
          <div className={styles.Trainer}>
            {isTrainer?
            <button className={styles.ProfileButton} onClick={() => account_ctx.setBody({isTrainerPage:true})} value="Trainer Tab">Trainer Tab</button>: 
            <>
            <span>Become Trainer in Actibooking</span>
            <button className={styles.ProfileButton} onClick={onSubmitTrainer} value="Active trainer">Active trainer</button>
            </> }
          </div>
      </div>
    </>
  );
};

export default ProfilePage;
