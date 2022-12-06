import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


function GoogleLogInPage() {
    const responseGoogle = (response) => {
        console.log(response);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        console.log(localStorage["user"])
      }

    return(
        <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
    )
}

export default GoogleLogInPage;