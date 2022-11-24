import styles from './LogInModal.module.css';
import LogInForm from '../Forms/AuthForms/LogInForm';

function LogInModal(props) {

    const closeModal = () => {
        props.closeModal();
    }

    const switchModal = () =>{
        props.switchModal();
    }

  return (
    <div>
    <div className={styles.backdrop} onClick={props.closeModal}/>
        <div className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.data.title}</h2>
            </header>
            <div className={styles.content}>
                <LogInForm closeModal={closeModal} redirectToSignInModal = {switchModal}/>
            </div>
        </div>
    </div>
  );
}

export default LogInModal;
    