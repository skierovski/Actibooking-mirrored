import styles from "./ProfilePage.module.css";
import Modal from '../../../DefaultModels/Modals/Modal'
import { useForm } from "react-hook-form";
import { useState } from "react";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";

const ProfilePage = (props) => {
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const children = props.data.children[0];
  const isTrainer = props.data.isTrainer;

  const onSubmit = (data) => {
    console.log(props);
    const addChildObject = {
      actiBookingUserId: props.data.id,
      name: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate
    }
    console.log(addChildObject)
    SignUpPostDataHandler("https://localhost:7127/api/User/add-child", addChildObject)
    
  }
  const toggleModal = () => {
    setModal(!modal)
  }


  return (
    <>
      <div className={styles.Information}>
      {modal  && (<Modal title="Add child" close={toggleModal}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>First name:</label>
      <input {...register("firstName")}></input>
      <label>Last name:</label>
      <input {...register("lastName")}></input>
      <label>Birth Date:</label>
      <input type='date' {...register("birthDate")}></input>
      <input type="submit" />
    </form>
    </Modal>
    )}
        <ul>
          <li>
            <div className={styles.Text}>
              <strong>First and Last Name:</strong>
              <span>
                {props.data.firstName} {props.data.lastName}
              </span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>E-mail:</strong>
              <span>{props.data.email}</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Birth Day:</strong>
              <span>{props.data.birthDate}</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Adress:</strong>
              <span>Pomorska 13b/7 Gdańsk 80-344</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Gender:</strong>
              <span>{props.data.gender}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.TrainerChilds}>
        <div className={styles.Childs}>  
        {children? 
          <button>Child Tab</button> : <button onClick={toggleModal} value="Add child">Add Child</button>}
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
