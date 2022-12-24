import styles from "./SignUpForm.module.css";
import AuthContext from "../../../Context/auth-context";
import {useContext, useRef, useState} from "react";
import SignUpPostDataHandler from "../../FetchMethods/PostMethods/SignUpPostDataHandler";
import Input from "../../DefaultModels/Input/Input";

const SignUpForm = () => {

    const [enteredEmail, setEnteredEmail] = useState();
    const [enteredPassword, setEnteredPassword] = useState();
    const [enteredFirstName, setEnteredFirstName] = useState();
    const [enteredLastName, setEnteredLastName] = useState();
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState();

    const auth_ctx = useContext(AuthContext)

    const onSubmitHandler = event =>{
        event.preventDefault();
        let data = {
            email:enteredEmail,
            password:enteredPassword,
            firstName:enteredFirstName,
            lastName:enteredLastName,
            phoneNumber:enteredPhoneNumber,
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
                    <Input label="Email" type="email" minLength={10} onChange={e=>setEnteredEmail(e.target.value)} required={true}/>
                    <Input label="Password" type="password" pattern ="(?=.*\d)(?=.*[\W_]).{5,}" onChange={e=>setEnteredPassword(e.target.value)} required={true}/>
                    <Input label="First Name" type="text" onChange={e=>setEnteredFirstName(e.target.value)} required={true}/>
                    <Input label="Last Name" type="text" onChange={e=>setEnteredLastName(e.target.value)} required={true}/>
                    <Input label="Phone Number*" type="number" maxLength={9} minLength={9} onChange={e=>setEnteredPhoneNumber(e.target.value)} required={true}/>
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