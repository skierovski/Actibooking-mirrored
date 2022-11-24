import SignUpForm from '../Forms/AuthForms/SignUpForm';
import styles from './SignUpModal.module.css';

function SignUpModal(props) {

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
                <SignUpForm closeModal={closeModal} redirectToSignInModal = {switchModal}/>
            </div>
        </div>
    </div>
  );
}

export default SignUpModal;
    