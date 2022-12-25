import ReactDOM from 'react-dom';
import { useContext } from 'react';
import AccountContext from '../../../../Context/account-ctx';
import Backdrop from '../../../DefaultModels/Backdrop/Backdrop';
import Modal from '../../../DefaultModels/Modals/Modal';
import styles from "./EditUserPhotoModal.module.css";
import WebcamCapture from './WebcamCapture';

const EditUserPhotoModal = () => {
    const account_ctx = useContext(AccountContext);
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={()=> account_ctx.setEditUserPhoto(false)}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title="Edit your photo" close={()=> account_ctx.setEditUserPhoto(false)}>
                    <div className={styles.UserImage}>
                        <WebcamCapture/>
                    </div>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default EditUserPhotoModal;