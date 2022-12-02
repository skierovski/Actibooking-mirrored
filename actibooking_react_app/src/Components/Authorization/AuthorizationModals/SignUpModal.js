import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import SignUpForm from '../../Forms/AuthForms/SignUpForm';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';

const SignUpModal= props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title={props.data.title} close={props.closeModal}>
                    <SignUpForm closeModal={props.closeModal} redirectToSignInModal = {props.switchModal}/>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default SignUpModal;