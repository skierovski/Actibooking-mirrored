import styles from "./SignUpForm.module.css";
import AuthContext from "../../../Context/auth-context";
import {useContext, useEffect, useRef, useState} from "react";
import SignUpPostDataHandler from "../../FetchMethods/PostMethods/SignUpPostDataHandler";

const SignUpForm = () => {

    const [enteredEmail, setEnteredEmail] = useState();
    const enteredPassword = useRef();
    const enteredFirstName = useRef();
    const enteredLastName = useRef();
    const enteredPhoneNumber = useRef();

    const auth_ctx = useContext(AuthContext)


    useEffect(()=>{
        const enteredEmailCheckTimeout = setTimeout(()=>{
            //TODO tutaj trzeba przesłać enteredEmail i sprawdzić czy w bazie danych nie ma już takiego emaila, dodać style w dwóch przypadkach itd;
            console.log(enteredEmail);
        }, 1000);
        return ()=>{
            clearTimeout(enteredEmailCheckTimeout);
        }
    }, [enteredEmail]);

    const onSubmitHandler = event =>{
        event.preventDefault();
        let data = {
            email:enteredEmail,
            password:enteredPassword.current.value,
            firstName:enteredFirstName.current.value,
            lastName:enteredLastName.current.value,
            phoneNumber:enteredPhoneNumber.current.value,
            birthDate:"12/12/2022",
            gender:"Male/Female",
            roles:["User"]
        };
        SignUpPostDataHandler("https://localhost:7127/api/Account/register", data, responseHandler)
    }

    const responseHandler = (response) => {
        if (response.ok){
            auth_ctx.closeModal();
            auth_ctx.SwitchModal();
            auth_ctx.setIsSignUpCorrectly(true);
        }
        else alert("Provide valid information");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.login_controls}>
                <div className={styles.login_control}>
                    <label>Email</label>
                    <input type='email' minLength={10} onChange={e => {setEnteredEmail(e.target.value)}} required={true}/>
                    <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" ref={enteredPassword} required={true}/>
                    <label>First Name</label>
                    <input type='text' ref={enteredFirstName} required={true}/>
                    <label>Last Name</label>
                    <input type='text' ref={enteredLastName} required={true}/>
                    <label>Phone Number*</label>
                    <input type='number' maxLength={9} minLength={9} ref={enteredPhoneNumber} required={false}/>
                    <div>Already have an account ? <p className={styles.sign_in_href} onClick={()=>{auth_ctx.SwitchModal()}}>Log in</p></div>
                </div>
            </div>
            <div className={styles.login_actions}>
                <button className={styles.create_button} type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default SignUpForm;