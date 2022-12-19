import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import LogInForm from '../../Forms/AuthForms/LogInForm';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import SuccessfullyRegisteredModal from './SuccessfullyRegisteredModal';
import { useContext } from 'react';
import AuthContext from "../../../Context/auth-context"

const LogInModal = props => {
    const ctx = useContext(AuthContext);
    console.log(ctx);
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title={props.data.title} close={props.closeModal}>
                    {props.isSignUpCorrectly && <SuccessfullyRegisteredModal closeModal={props.closeSignUpCorrectlyModal}/>}
                    <LogInForm closeModal={props.closeModal} redirectToSignInModal = {props.switchModal} setIsSuccessfull={props.setIsSuccessfull}/>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default LogInModal;