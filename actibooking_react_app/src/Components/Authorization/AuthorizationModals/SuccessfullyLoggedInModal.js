import ReactDOM from 'react-dom';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import styles from "./SuccessfullyLoggedInModal.module.css";


const SuccessfullyLoggedInModal = props => {


    const closeUp = () =>{
        console.log("close")
        setTimeout(()=>{
            props.closeModal();
        }, 2000)
    }


    return (
    <>
        {ReactDOM.createPortal(<Backdrop/>, document.getElementById('modal-root'))}
        {ReactDOM.createPortal(
                    <div className={styles.modal} onLoad={closeUp()}>
                    <header className={styles.header}>
                        <h2>Success !!!</h2>
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