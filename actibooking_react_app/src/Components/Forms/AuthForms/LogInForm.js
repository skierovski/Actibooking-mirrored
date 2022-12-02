import styles from "./LogInForm.module.css";
import {useRef} from "react";

const LogInForm = props => {

    const enteredEmail = useRef()
    const enteredPassword = useRef()

    const onSubmitHandler = event =>{
        event.preventDefault();
        const data = {
            email:enteredEmail.current.value,
            password:enteredPassword.current.value
        };
        console.log(data);
        props.closeModal();
    }

    const redirectToSignInModal = () => {
        props.redirectToSignInModal();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.login_controls}>
                <div className={styles.login_control}>
                    <label>Email</label>
                    <input type='email' minLength={10} ref={enteredEmail} required={true}/>
                    <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" ref={enteredPassword} required={true}/>
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