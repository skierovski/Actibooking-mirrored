import styles from "./SignUpForm.module.css";
import {useRef} from "react";

const SignUpForm = props => {

    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const enteredFirstName = useRef();
    const enteredLastName = useRef();
    const enteredPhoneNumber = useRef();

    const onSubmitHandler = event =>{
        event.preventDefault();
        const data = {
            email:enteredEmail.current.value,
            password:enteredPassword.current.value,
            firstName:enteredFirstName.current.value,
            lastName:enteredLastName.current.value,
            phoneNumber:enteredPhoneNumber.current.value,
            roles:['User']
        };
        console.log(data);
        props.closeModal();
    }

    const redirectToLogInModal = () =>{
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
                    <label>First Name</label>
                    <input type='text' ref={enteredFirstName} required={true}/>
                    <label>Last Name</label>
                    <input type='text' ref={enteredLastName} required={true}/>
                    <label>Phone Number*</label>
                    <input type='number' maxLength={9} minLength={9} ref={enteredPhoneNumber} required={false}/>
                    <div>Already have an account ? <p className={styles.sign_in_href} onClick={redirectToLogInModal}>Log in</p></div>
                </div>
            </div>
            <div className={styles.login_actions}>
                <button className={styles.create_button} type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default SignUpForm;