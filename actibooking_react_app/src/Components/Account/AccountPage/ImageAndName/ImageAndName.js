import styles from "./ImageAndName.module.css";
import SectionTitle from "../../../DefaultModels/Titles/SectionTitle";

const ImageAndName = (props) => {
  return (
    <div className={styles.ProfileImage}>
      <div className={styles.Image}>
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          alt="Avatar"
        ></img>
      </div>
      <div>
        <SectionTitle
          value={`${props.data.firstName} ${props.data.lastName}`}
        />
      </div>
    </div>
  );
};

export default ImageAndName;
