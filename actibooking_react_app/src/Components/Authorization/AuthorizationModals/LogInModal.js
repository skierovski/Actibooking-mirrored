import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import LogInForm from '../../Forms/AuthForms/LogInForm';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import SuccessfullyRegisteredModal from './SuccessfullyRegisteredModal';
import { useContext } from 'react';
import AuthContext from "../../../Context/auth-context"

const LogInModal = () => {
    const auth_ctx = useContext(AuthContext);
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={auth_ctx.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title="Log in" close={auth_ctx.closeModal}>
                    {auth_ctx.isSignUpCorrectly && <SuccessfullyRegisteredModal closeModal={() => auth_ctx.setIsSignUpCorrectly(false)}/>}
                    <LogInForm/>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default LogInModal;