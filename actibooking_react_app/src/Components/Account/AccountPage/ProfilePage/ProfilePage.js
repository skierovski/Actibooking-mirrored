import styles from "./ProfilePage.module.css";
import Button from "../../../DefaultModels/Buttons/Button";
import Modal from '../../../DefaultModels/Modals/Modal'

const ProfilePage = (props) => {

  const children = props.data.children;
  const isTrainer = props.data.isTrainer;
  console.log(children)
  return (
    <>
      <div className={styles.Information}>
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
              <span>Diany 40/4 Gdańsk 80-299</span>
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
        <div className={styles.Childs} onClick={<Modal/>}>  
        {children? 
          <Button value="Child Tab"/> : <Button value="Add child"/>}
        </div>
        <div className={styles.Trainer}>
          {isTrainer?
          <Button value="Trainer Tab"></Button>: 
          <Button value="Active trainer" href={`/Active`} /> }
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
