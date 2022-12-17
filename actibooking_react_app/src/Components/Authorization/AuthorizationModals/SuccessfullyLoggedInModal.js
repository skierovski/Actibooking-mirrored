import ReactDOM from 'react-dom';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import styles from "./SuccessfullyLoggedInModal.module.css";
import { CgClose } from 'react-icons/cg';


const SuccessfullyLoggedInModal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                    <div className={styles.modal}>
                    <header className={styles.header}>
                        <h2>Success !!!</h2>
                        <CgClose size={20} className={styles.closeIcon} onClick={()=>props.closeModal()}/>
                    </header>
                    <div className={styles.content}>
                        <p>You succesfully logged in</p>         
                    </div>
                </div>,
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default SuccessfullyLoggedInModal;