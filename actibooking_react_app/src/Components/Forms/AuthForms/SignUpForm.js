import styles from "./SignUpForm.module.css";
import {useState} from "react";

const SignUpForm = props => {

    const[userInput, setUserInput] = useState({
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        roles:['User']
    })

    const EmailChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, email: event.target.value};
    })};
    const PasswordChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, password: event.target.value};
    })};
    const FirstNameChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, firstName: event.target.value};
    })};
    const LastNameChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, lastName: event.target.value};
    })};
    const PhoneNumberChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, phoneNumber: event.target.value};
    })};

    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log(userInput);
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
                    <input type='email' minLength={10} value={userInput.email} onChange={EmailChangeHandler} required={true}/>
                    <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" value={userInput.password} onChange={PasswordChangeHandler} required={true}/>
                    <label>First Name</label>
                    <input type='text' value={userInput.firstName} onChange={FirstNameChangeHandler} required={true}/>
                    <label>Last Name</label>
                    <input type='text' value={userInput.lastName} onChange={LastNameChangeHandler} required={true}/>
                    <label>Phone Number*</label>
                    <input type='number' maxLength={9} minLength={9} value={userInput.phoneNumber} onChange={PhoneNumberChangeHandler} required={true}/>
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