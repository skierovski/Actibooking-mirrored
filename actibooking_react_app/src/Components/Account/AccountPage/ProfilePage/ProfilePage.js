import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import styles from "./ProfilePage.module.css";
import Modal from '../../../DefaultModels/Modals/Modal';
import AccountInfoContainer from "./AccountInfoContaner";
import AccountContext from "../../../../Context/account-ctx";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";

const ProfilePage = () => {
  const account_ctx = useContext(AccountContext);
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const children = account_ctx.userData.children ? account_ctx.userData.children[0] : null;
  const isTrainer = account_ctx.userData.isTrainer;

  const onSubmit = (data) => {
    const addChildObject = {
      actiBookingUserId: account_ctx.userData.id,
      name: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate
    }
    SignUpPostDataHandler("https://localhost:7127/api/User/add-child", addChildObject)
  }

  return (
    <>
      <div className={styles.Information}>
        {modal  && <Modal title="Add child" close={() => setModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name:</label>
        <input {...register("firstName")}></input>
        <label>Last name:</label>
        <input {...register("lastName")}></input>
        <label>Birth Date:</label>
        <input type='date' {...register("birthDate")}></input>
        <input type="submit" />
      </form>
      </Modal>}
      <AccountInfoContainer></AccountInfoContainer>
      </div>
      <div className={styles.TrainerChilds}>
          <div className={styles.Childs}>  
          {children? 
            <button>Child Tab</button> : <button onClick={() => setModal(true)} value="Add child">Add Child</button>}
          </div>
          <div className={styles.Trainer}>
            {isTrainer?
            <button value="Trainer Tab">Trainer Tab</button>: 
            <button value="Active trainer" href={`/Active`}>Active trainer</button> }
          </div>
      </div>
    </>
  );
};

export default ProfilePage;
