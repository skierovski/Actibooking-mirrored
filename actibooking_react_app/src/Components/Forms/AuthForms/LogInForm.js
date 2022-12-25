import {useContext, useRef} from "react";
import styles from "./LogInForm.module.css";
import Input from "../../DefaultModels/Input/Input";
import AuthContext from "../../../Context/auth-context"
import CookiesContext from "../../../Context/cookies-context";
import GoogleLogInPage from "../../Authorization/GoogleAthorization/GoogleLogInPage";
import LogInPostDataHandler from "../../FetchMethods/PostMethods/LogInPostDataHandler";

const LogInForm = () => {

    const enteredEmail = useRef()
    const enteredPassword = useRef()
    const auth_ctx = useContext(AuthContext);
    const cookies_ctx = useContext(CookiesContext);


    const onSubmitHandler = event =>{
        event.preventDefault();
        let userData = {
            email:enteredEmail.current.getValue(),
            password:enteredPassword.current.getValue(),
        };
        LogInPostDataHandler("https://localhost:7127/api/Account/login", userData, responseHandler)
    }

    const responseHandler = (response) => {
        let token = response.token;
        if (token){
            cookies_ctx.SetCookie("token", token, "/", 'httpOnly');
            auth_ctx.setIsSuccessfullLoggedIn(true);
        }
        else alert("Wrong email or password");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.login_controls}>
                <div className={styles.login_control}>
                    {/* <label>Email</label>
                    <input type='email' minLength={10} ref={enteredEmail} required={true}/> */}
                    <Input label="Email" type="email" minLength={10} ref={enteredEmail} required={true}/>
                    {/* <label>Password</label>
                    <input type='password' pattern="(?=.*\d)(?=.*[\W_]).{5,}" ref={enteredPassword} required={true}/> */}
                    <Input label="Password" type="password" pattern ="(?=.*\d)(?=.*[\W_]).{5,}" ref={enteredPassword} required={true}/>
                    <div className={styles.google_control}><GoogleLogInPage/></div>
                    <div>Don't have an account ? <p className={styles.sign_in_href} onClick={()=>auth_ctx.SwitchModal()}>Sign in</p></div>
                </div>
            </div>
            <div className={styles.login_actions}>
                <button className={styles.create_button} type="submit">Login</button>
            </div>
        </form>
    )
}
export default LogInForm;