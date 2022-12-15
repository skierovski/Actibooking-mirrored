import styles from "./LogInForm.module.css";
import {useRef} from "react";
import LogInPostDataHandler from "../../FetchMethods/PostMethods/LogInPostDataHandler";
import { useCookies } from "react-cookie";
import GoogleLogInPage from "../../Authorization/GoogleAthorization/GoogleLogInPage";

const LogInForm = props => {

    const enteredEmail = useRef()
    const enteredPassword = useRef()
    const [cookies, setCookies] = useCookies();

    const onSubmitHandler = event =>{
        event.preventDefault();
        const data = {
            email:enteredEmail.current.value,
            password:enteredPassword.current.value,
        };
        LogInPostDataHandler("https://localhost:7127/api/Account/login", data, responseHandler)
    }

    const redirectToSignInModal = () => {
        props.redirectToSignInModal();
    }

    const responseHandler = (response) => {
        let token = response.token;
        if (token){
            setCookies("token", token, {path: "/" }, 'httpOnly');
            props.closeModal();
            props.setIsSuccessfull();
        }
        else alert("Wrong email or password");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.login_controls}>
                <div className={styles.login_control}>
                    <label>Email</label>
                    <input type='email' minLength={10} ref={enteredEmail} required={true}/>
                    <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" ref={enteredPassword} required={true}/>
                    <div className={styles.google_control}><GoogleLogInPage/></div>
                    <div>Don't have an account ? <p className={styles.sign_in_href} onClick={redirectToSignInModal}>Sign in</p></div>
                </div>
            </div>
            <div className={styles.login_actions}>
                <button className={styles.create_button} type="submit">Login</button>
            </div>
        </form>
    )
}

export default LogInForm;