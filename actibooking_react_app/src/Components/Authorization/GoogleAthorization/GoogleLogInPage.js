import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider } from '@react-oauth/google';


function GoogleLogInPage() {
    const clientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com";
    const responseGoogle = (response) => {
      const token = response.credential;
        console.log(response);
        const userObject = jwt_decode(token);
        console.log(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        console.log(localStorage["user"])
      }

    return(
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            useOneTap={true}
            text= "signup_with"
            />
            </GoogleOAuthProvider>
    )
}

export default GoogleLogInPage;