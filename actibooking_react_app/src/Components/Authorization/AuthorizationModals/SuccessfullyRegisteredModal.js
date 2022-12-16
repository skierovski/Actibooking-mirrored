import {VscPass} from 'react-icons/vsc';
import styles from "./SuccessfullyRegisteredModal.module.css"

const SuccessfullyRegisteredModal = props => {


    const closeUp = () =>{
        console.log("close")
        setTimeout(()=>{
            props.closeModal();
        }, 2000)
    }

    return (
    <>
        <div className={styles.backdrop} onLoad={closeUp()}/>
        <div className={styles.iconContainer} onClick={props.closeModal}>
            <VscPass className={styles.icon} size={5}/>
        </div>
    </>
  )
}
export default SuccessfullyRegisteredModal;