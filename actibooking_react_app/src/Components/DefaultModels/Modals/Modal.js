import styles from './Modal.module.css';
import { CgClose } from 'react-icons/cg';

const Modal = props => {
    return(
        <div className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
                <CgClose size={35} className={styles.closeIcon} onClick={props.close}/>
            </header>
            <div className={styles.content}>
                
                {props.children}              
            </div>
        </div>
    )
}

export default Modal;