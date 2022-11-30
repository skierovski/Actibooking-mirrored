import ProfilePage from "../ProfilePage/ProfilePage";
import SecurityPage from "../SecurityPage/SecurityPage";
import CoursesPage from '../CoursesPage/CoursesPage';
import AccountPageData from '../../../../Data/AccountPageData';
import SettingsPage from "../SettingsPage/SettingsPage";

const BodyToReturn = (props) => {
    if(props.body === "security"){
        return(
            <SecurityPage/>
        )
    }
    if (props.body === "courses") {
        return(
            <CoursesPage data={AccountPageData}/>
        )
    }
    if (props.body === "settings") {
        return(
            <SettingsPage/>
        )
    }
    else {
        return(
            <ProfilePage data={AccountPageData}/>
        )
    }
}

export default BodyToReturn;