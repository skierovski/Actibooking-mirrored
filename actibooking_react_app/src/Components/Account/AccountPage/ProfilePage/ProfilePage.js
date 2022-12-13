import styles from "./ProfilePage.module.css";
import Button from "../../../DefaultModels/Buttons/Button";

const ProfilePage = (props) => {

  const children = props.data.children;
  console.log(children.length)
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
        <div className={styles.Childs}>  
        {children.length > 0? 
          <Button value="Child Tab"/> : <Button value="Add child"/>}
        </div>
        <div className={styles.Trainer}>
          {props.data.isTrainer?<Button value="Active trainer" href={`/Active`} /> : <p><Button value="Trainer Tab"></Button></p>}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
