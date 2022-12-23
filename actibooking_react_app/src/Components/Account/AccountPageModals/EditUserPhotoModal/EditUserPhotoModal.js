import ReactDOM from 'react-dom';
import { useContext } from 'react';
import AccountContext from '../../../../Context/account-ctx';
import Backdrop from '../../../DefaultModels/Backdrop/Backdrop';
import Modal from '../../../DefaultModels/Modals/Modal';
import UserImage from '../../ImageAndName/UserImage';
import styles from "./EditUserPhotoModal.module.css";
import SectionTitle from '../../../DefaultModels/Titles/SectionTitle';
import { MdAddAPhoto } from "react-icons/md";

const EditUserPhotoModal = () => {
    const account_ctx = useContext(AccountContext);
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={()=> account_ctx.setEditUserPhoto(false)}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title="Edit your photo" close={()=> account_ctx.setEditUserPhoto(false)}>
                    <div className={styles.UserImage}>
                        <UserImage/>
                    </div>
                    <div className={styles.AddPhoto}
                    //  onClick={()=>{navigator.mediaDevices.getUserMedia({video:true}).then(stream => {})}}
                    >
                        <MdAddAPhoto color='green' size={25}/><SectionTitle value={"Add new profile photo!"}  />
                    </div>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default EditUserPhotoModal;