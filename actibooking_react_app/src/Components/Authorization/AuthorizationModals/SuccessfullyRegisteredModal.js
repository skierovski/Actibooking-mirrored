import ReactDOM from 'react-dom';
import Modal from '../../DefaultModels/Modals/Modal';
import Backdrop from '../../DefaultModels/Backdrop/Backdrop';

const SuccessfullyRegisteredModal = props => {
    return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.closeModal}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
                <Modal title={props.data.title} close={props.closeModal}>
                    <h1>You Syccessfully registered !!!</h1>
                </Modal>,
            document.getElementById('modal-root')
        )}
    </>
  )
}
export default SuccessfullyRegisteredModal;