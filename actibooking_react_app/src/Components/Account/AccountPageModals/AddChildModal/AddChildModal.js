import ReactDOM from 'react-dom';
import Backdrop from '../../../DefaultModels/Backdrop/Backdrop';
import Modal from '../../../DefaultModels/Modals/Modal';
import AddChildForm from '../../../Forms/AddChildForm/AddChildForm';

const AddChildModal = (props) => {
    return (
    <>
    {ReactDOM.createPortal(
        <Modal title="Add child" close={props.close}>
            <AddChildForm/>
        </Modal>, document.getElementById("modal-root"))}
        {ReactDOM.createPortal(<Backdrop close={props.close}/>, document.getElementById('backdrop-root'))}
    </>
  )
}
export default AddChildModal;