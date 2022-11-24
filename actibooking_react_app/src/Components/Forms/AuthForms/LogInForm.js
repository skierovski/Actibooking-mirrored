import styles from "./LogInForm.module.css";
import {useState} from "react";

const LogInForm = props => {

    const[userInput, setUserInput] = useState({
        email:'',
        password:''
    })

    const EmailChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, email: event.target.value};
    })};
    const PasswordChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, password: event.target.value};
    })};

    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log(userInput);
        props.closeModal();
    }

    const redirectToSignInModal = () =>{
        props.redirectToSignInModal();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.login_controls}>
                <div className={styles.login_control}>
                    <label>Email</label>
                    <input type='email' minLength={10} value={userInput.email} onChange={EmailChangeHandler} required={true}/>
                    <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" value={userInput.password} onChange={PasswordChangeHandler} required={true}/>
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