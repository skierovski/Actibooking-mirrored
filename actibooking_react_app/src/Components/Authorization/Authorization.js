import {useState} from 'react';
import LogInModal from './AuthorizationModals/LogInModal';
import SignUpModal from './AuthorizationModals/SignUpModal';
import styles from "./Authorization.module.css";
import {HiOutlineUserCircle} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import LogOutButton from './LogOutButton/LogOutButton';
import SuccessfullyLoggedInModal from "../Authorization/AuthorizationModals/SuccessfullyLoggedInModal";
import jwtDecode from 'jwt-decode';


const Authorization = () =>{
    const [cookies, setCookies] = useCookies();
    const [isSuccessfull, setIsSuccessfull] = useState(false);
    const [logInModalData, setlogInModalData] = useState();
    const [signUpModalData, setSignUpModalData] = useState();
    const decodedToken = jwtDecode(cookies['token']);
    const [isSignUpCorrectly, setIsSignUpCorrectly] = useState(false);

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
            {cookies['token'] && <Link to={`/Account/${decodedToken.uid}`}><HiOutlineUserCircle size={50} className={styles.userIconContainer}/></Link>}
            {cookies['token'] ? <LogOutButton/> :<div className={styles.Authorization_container}><div className={styles.Authorization} onClick={triggerLogInModal}>Log in / Sign up</div></div>}
            {logInModalData && <LogInModal data={logInModalData} closeModal={closeModal} switchModal={SwitchModal} setIsSuccessfull={() => setIsSuccessfull(true)} isSignUpCorrectly={isSignUpCorrectly} />}
            {signUpModalData && <SignUpModal data={signUpModalData} closeModal={closeModal} switchModal={SwitchModal} isSignUpCorrectly={()=>setIsSignUpCorrectly(true)}/>}
            {isSuccessfull && <SuccessfullyLoggedInModal closeModal={() => setIsSuccessfull(false)}/> }
        </div>
    )
}

export default Authorization;