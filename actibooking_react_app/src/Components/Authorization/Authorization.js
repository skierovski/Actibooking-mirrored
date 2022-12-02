import {useState} from 'react';
import LogInModal from './AuthorizationModals/LogInModal';
import SignUpModal from './AuthorizationModals/SignUpModal';
import styles from "./Authorization.module.css";
import {HiOutlineUserCircle} from 'react-icons/hi';
import { Link } from 'react-router-dom';

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
        <div className={styles.AuthContainer}>
            <Link to="/Account/1"><HiOutlineUserCircle size={50} className={styles.userIconContainer}/></Link>
            <div className={styles.Authorization_container}>
                <div className={styles.Authorization} onClick={triggerLogInModal}>Log in / Sign up</div>
            </div>
            {logInModalData && <LogInModal data={logInModalData} closeModal={closeModal} switchModal={SwitchModal}/>}
            {signUpModalData && <SignUpModal data={signUpModalData} closeModal={closeModal} switchModal={SwitchModal}/>}
        </div>
    )
}

export default Authorization;