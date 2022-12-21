import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "./Authorization.module.css";
import AuthContext from "../../Context/auth-context";
import { HiOutlineUserCircle } from "react-icons/hi";
import LogOutButton from "./LogOutButton/LogOutButton";
import LogInModal from "./AuthorizationModals/LogInModal";
import CookiesContext from "../../Context/cookies-context";
import SignUpModal from "./AuthorizationModals/SignUpModal";
import SuccessfullyLoggedInModal from "../Authorization/AuthorizationModals/SuccessfullyLoggedInModal";

const Authorization = () => {

  const CookiesCTX = useContext(CookiesContext)
  const [isSuccessfullLoggedIn, setIsSuccessfullLoggedIn] = useState(false);
  const [isSignUpCorrectly, setIsSignUpCorrectly] = useState(false);
  const [logInModal, setlogInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  let token = CookiesCTX.GetCookie("token");
  let decodedToken;

  if (token) {
    decodedToken = CookiesCTX.DecodeToken(token);
  };

  const triggerLogInModal = () => {
    setlogInModal(true);
  };

  const triggerSignUpModal = () => {
    setSignUpModal(true);
  };

  const SwitchModal = () => {
    if(logInModal){
        setlogInModal(false);
        triggerSignUpModal();
    }
    else{
        setSignUpModal(false);
        triggerLogInModal();
    }
  };

  const closeModal = () => {
    setlogInModal(false);
    setSignUpModal(false);
  };

  return(
    <AuthContext.Provider
    value = {{
      decodedToken,
      isSignUpCorrectly,
      closeModal,
      SwitchModal,
      triggerLogInModal,
      triggerSignUpModal,
      setIsSignUpCorrectly,
      setIsSuccessfullLoggedIn,
    }}>
      <div className={styles.AuthContainer}>
          {token && <Link to={`/Account/${decodedToken.uid}`}><HiOutlineUserCircle size={50} className={styles.userIconContainer}/></Link>}
          {token ? <LogOutButton/> : <div className={styles.Authorization_container}><div className={styles.Authorization} onClick={triggerLogInModal}>Log in / Sign up</div></div>}
          {logInModal && <LogInModal/>}
          {signUpModal && <SignUpModal/>}
          {isSuccessfullLoggedIn && <SuccessfullyLoggedInModal/>}
      </div>
    </AuthContext.Provider>
    )}

export default Authorization;
