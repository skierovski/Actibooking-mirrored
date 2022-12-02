import Navibar from "../../Navibar/Navibar"
import styles from './AccountPage.module.css'
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import ImageAndName from "./ImageAndName/ImageAndName";
import AccountPageData from "../../../Data/AccountPageData";

const AccountPage = () => {
    const [body, setBody] = useState("default")

    const ChangeBody = (content) =>{
        setBody(content);
        console.log(body)
    }

    return(
        <div className={styles.AccountPage}>
        <Navibar />
        <div className={styles.Wrapper}>
        <NavigationBar changeBody={ChangeBody} data={AccountPageData}/>
        <div className={styles.Container}>
        <ImageAndName data={AccountPageData}/>
        <BodyToReturn body={body} changeBody={ChangeBody}/>
        </div>
        </div>
        </div>
    )
}

export default AccountPage;