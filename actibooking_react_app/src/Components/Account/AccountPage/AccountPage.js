import Navibar from "../../Navibar/Navibar"
import styles from './AccountPage.module.css'
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

const AccountPage = () => {
    const [body, setBody] = useState("default")

    const ChangeBody = (content) =>{
        setBody(content);
        console.log(body)
    }

    return(
        <>
        <Navibar />
        <div className={styles.Wrapper}>
        <NavigationBar changeBody={ChangeBody}/>
        <div className={styles.Container}>
        <BodyToReturn body={body}/>
        </div>
        </div>


        </>
    )
}

export default AccountPage;