import ProfilePage from "../ProfilePage/ProfilePage";
import SecurityPage from "../SecurityPage/SecurityPage";
import CoursesPage from '../CoursesPage/CoursesPage'

const BodyToReturn = (props) => {
    if(props.body === "security"){
        return(
            <SecurityPage/>
        )
    }
    if (props.body === "courses") {
        return(
            <CoursesPage/>
        )
    } 
    else {
        return(
            <ProfilePage/>
        )
    }
}

export default BodyToReturn;