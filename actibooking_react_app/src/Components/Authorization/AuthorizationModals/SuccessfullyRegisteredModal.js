import ReactDOM from 'react-dom';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import {VscPass} from 'react-icons/vsc';
import styles from "./SuccessfullyRegisteredModal.module.css"

const SuccessfullyRegisteredModal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
            <div className={styles.iconContainer}>
                    <VscPass className={styles.icon} size={100}/>
            </div>,
            document.getElementById('loginModalIcon')
        )}
    </>
  )
}
export default SuccessfullyRegisteredModal;