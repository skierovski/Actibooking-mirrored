import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import LogInForm from '../../Forms/AuthForms/LogInForm';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';

const LogInModal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title={props.data.title} close={props.closeModal}>
                    <LogInForm closeModal={props.closeModal} redirectToSignInModal = {props.switchModal}/>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default LogInModal;