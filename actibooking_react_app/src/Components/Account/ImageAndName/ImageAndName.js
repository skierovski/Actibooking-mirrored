import styles from "./ImageAndName.module.css";
import { useContext } from "react";
import AccountContext from "../../../Context/account-ctx";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import EditUserPhotoModal from "../AccountPageModals/EditUserPhotoModal/EditUserPhotoModal";
import UserImage from "./UserImage";


const ImageAndName = () => {

  const account_ctx = useContext(AccountContext);

  return (
    <>
      <div className={styles.ProfileImage}>
        <div className={styles.Image}>
          <UserImage onClick={()=>account_ctx.setEditUserPhoto(true)}/>
        </div>
        <div>
          <SectionTitle value={`${account_ctx.userData.firstName} ${account_ctx.userData.lastName}`}/>
        </div>
      </div>
      {account_ctx.editUserPhoto && <EditUserPhotoModal/>}
    </>
  );
};

export default ImageAndName;
