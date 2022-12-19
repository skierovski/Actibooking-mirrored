import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import SignUpForm from '../../Forms/AuthForms/SignUpForm';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';
import { useContext } from 'react';
import AuthContext from '../../../Context/auth-context';

const SignUpModal = () => {
    const auth_ctx = useContext(AuthContext);
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={auth_ctx.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title="Sign up" close={auth_ctx.closeModal}>
                    <SignUpForm/>
                </Modal>, 
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default SignUpModal;