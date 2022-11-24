import {useState} from 'react';
import LogInModal from '../Modals/LogInModal';
import SignUpModal from '../Modals/SignUpModal';
import styles from "./Authorization.module.css";
import {HiOutlineUserCircle} from 'react-icons/hi';

const Authorization = () =>{

    const [logInModalData, setlogInModalData] = useState();
    const [signUpModalData, setSignUpModalData] = useState();

    const triggerLogInModal = () => {
        setlogInModalData({
            title:"Log In",
        })
    }

    const triggerSignUpModal = () => {
        setSignUpModalData({
            title:"Sign Up",
        })
    }
    const SwitchModal = () => {
        if(logInModalData != null){
            setlogInModalData(null);
            triggerSignUpModal();
        }
        else{
            setSignUpModalData(null);
            triggerLogInModal();
        }
    }
    const closeModal = () => {
        setlogInModalData(null);
        setSignUpModalData(null);
    }

    return(
        <>
            <HiOutlineUserCircle size={50} className={styles.userIconContainer} onClick={triggerLogInModal}/>
            <div className={styles.Authorization_container}>
                <div className={styles.Authorization} onClick={triggerLogInModal}>Log in / Sign up</div>
            </div>
            {logInModalData && <LogInModal data={logInModalData} closeModal={closeModal} switchModal={SwitchModal}/>}
            {signUpModalData && <SignUpModal data={signUpModalData} closeModal={closeModal} switchModal={SwitchModal}/>}
        </>
    )
}

export default Authorization;