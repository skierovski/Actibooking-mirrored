import styles from "./ProfilePage.module.css";
import Button from "../../../DefaultModels/Buttons/Button";

const ProfilePage = (props) => {
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
          {props.data.children.map((o) => (
            <span>
              {o.name} {o.lastName}
            </span>
          ))}
        </div>
        <div className={styles.Trainer}>
          <Button value="Active trainer" href={`/Active`} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
