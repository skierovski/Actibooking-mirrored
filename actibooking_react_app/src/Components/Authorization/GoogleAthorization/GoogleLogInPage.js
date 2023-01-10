import { useContext } from 'react';
import AuthContext from '../../../Context/auth-context';
import CookiesContext from '../../../Context/cookies-context';
import LogInPostDataHandler from "../../FetchMethods/PostMethods/LogInPostDataHandler"
import { ToastContainer, toast } from 'react-toastify';

import { useEffect } from 'react';
const GoogleLogInPage = () => {

    const auth_ctx = useContext(AuthContext);
    const cookies_ctx = useContext(CookiesContext);

    function handleCallBackResponse(response) {
        console.log("Encodec JWT Token: " + response.credential);
        const token = { idToken:response.credential }
        LogInPostDataHandler('https://localhost:7127/api/Account/authenticate', token, ResponseHandler)
    }

    const ResponseHandler = (response) =>{
        let token = response.token;
          if (token){
              cookies_ctx.SetCookie("token", token, "/", 'httpOnly');
              auth_ctx.closeModal();
          }
      }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
        client_id: "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com",
        callback: handleCallBackResponse,
        
        });
        google.accounts.id.renderButton(
            document.getElementById('signInGoogle'),
            {theme: "outline", size: "large"}
        );
    },[])

    return(
        <>
        <div id="signInGoogle"></div>
        < ToastContainer/>
        </>

    )
}
export default GoogleLogInPage;