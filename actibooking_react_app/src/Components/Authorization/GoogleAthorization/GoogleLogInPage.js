import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LogInPostDataHandler from '../../FetchMethods/PostMethods/LogInPostDataHandler';
import { useCookies } from 'react-cookie';


function GoogleLogInPage() {
  const [cookies, setCookies] = useCookies();
    const clientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com";
    const responseGoogle = (response) => {
        console.log(response);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        console.log(localStorage["user"])
      }

    const ResponseSucces = (response) => {
      console.log(response);
      const token = {
        idToken:response.credential,
      }
      LogInPostDataHandler('https://localhost:7127/api/Account/authenticate', token, ResponseHandler)
    }

    const ResponseHandler = (props) =>{
      let token = props.token;
        if (token){
            setCookies("token", token, {path: "/" }, 'httpOnly');
        }
        else alert("Wrong email or password");
    }

    return(
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
            onSuccess={ResponseSucces}
            onFailure={responseGoogle}
            useOneTap={true}
            text= "login_with"
            />
            </GoogleOAuthProvider>
    )
}

export default GoogleLogInPage;