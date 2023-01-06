import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthContext from '../../../Context/auth-context';
import CookiesContext from '../../../Context/cookies-context';
import LogInPostDataHandler from '../../FetchMethods/PostMethods/LogInPostDataHandler';
const GoogleLogInPage = () => {

    const clientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com";
    const auth_ctx = useContext(AuthContext);
    const cookies_ctx = useContext(CookiesContext);

    const ResponseSucces = (response) => {
      const token = { idToken:response.credential }
      LogInPostDataHandler('https://localhost:7127/api/Account/authenticate', token, ResponseHandler)
    }

    const ResponseHandler = (response) =>{
      let token = response.token;
        if (token){
            cookies_ctx.SetCookie("token", token, "/", 'httpOnly');
            auth_ctx.closeModal();
        }
        else alert("Wrong email or password");
    }

    return(
        <GoogleOAuthProvider  clientId={clientId}>
        <GoogleLogin
            onSuccess={ResponseSucces}
            onFailure={() => alert("Wrong email or password")}
            useOneTap={false}
            text= "continue_with"
            scope= "https://www.googleapis.com/auth/calendar"
        />
        </GoogleOAuthProvider>
    )
}
export default GoogleLogInPage;