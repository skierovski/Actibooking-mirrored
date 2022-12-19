import styles from "./ImageAndName.module.css";
import SectionTitle from "../../../DefaultModels/Titles/SectionTitle";
import { useContext } from "react";
import AccountContext from "../../../../Context/account-ctx";


const ImageAndName = () => {

  const account_ctx = useContext(AccountContext);

  return (
    <div className={styles.ProfileImage}>
      <div className={styles.Image}>
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="Avatar"
        ></img>
      </div>
      <div>
        <SectionTitle value={`${account_ctx.userData.firstName} ${account_ctx.userData.lastName}`}/>
      </div>
    </div>
  );
};

export default ImageAndName;
