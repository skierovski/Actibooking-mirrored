import ProfilePage from "../ProfilePage/ProfilePage";
import SecurityPage from "../SecurityPage/SecurityPage";
import CoursesPage from '../CoursesPage/CoursesPage';
import AccountPageData from '../../../../Data/AccountPageData';
import SettingsPage from "../SettingsPage/SettingsPage";
import ChildPage from "../ChildPage/ChildPage";
import TrainerPage from "../TrainerPage/TrainerPage";

const BodyToReturn = (props) => {
    if(props.body === "security"){
        return(
            <SecurityPage/>
        )
    }
    if (props.body === "courses") {
        return(
            <CoursesPage data={props.data}/>
        )
    }
    if (props.body === "settings") {
        return(
            <SettingsPage/>
        )
    }
    if(props.body ==="childs") {
        return(
            <ChildPage data={props.data}/>
        )
    }
    if(props.body ==="trainer") {
        return(
            <TrainerPage/>
        )
    }
    else {
        return(
            <ProfilePage data={props.data}/>
        )
    }
}

export default BodyToReturn;