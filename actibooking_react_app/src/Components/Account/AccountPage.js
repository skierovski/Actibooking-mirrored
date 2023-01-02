import Navibar from "../Navibar/Navibar";
import { useParams } from "react-router-dom";
import styles from "./AccountPage.module.css";
import TrainerPage from "./TrainerPage/TrainerPage";
import CoursesPage from "./CoursesPage/CoursesPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import {useContext, useEffect, useState } from "react";
import ImageAndName from "./ImageAndName/ImageAndName";
import AccountContext from "../../Context/account-ctx";
import SettingsPage from "./SettingsPage/SettingsPage";
import NavigationBar from "./NavigationBar/NavigationBar";
import CookiesContext from "../../Context/cookies-context";
import GetDataHandler from "../FetchMethods/GetDataHandler";
import LoadingScreen from "../DefaultModels/LoadingScreen/LoadingScreen";

const AccountPage = () => {
  const {id}=useParams();
  const [userData, setData] = useState();
  const [body, setBody] = useState();
  const [editUserPhoto, setEditUserPhoto] = useState();
  const cookies_ctx = useContext(CookiesContext);
  
  useEffect(()=>{
    GetDataHandler(`https://localhost:7127/api/User/${id}`, setData)
    setBody({isProfilePage:true})
  },[id])

  const logOut = () =>{
    cookies_ctx.RemoveCookie('token');
    setTimeout(()=>{
      window.location.reload();
  },100)
  }

  return (
    <AccountContext.Provider
    value={{
      userData,
      editUserPhoto,
      setBody,
      logOut,
      setEditUserPhoto
    }}>
    <Navibar/>
      {userData &&
        <div className={styles.Wrapper}>
          <div className={styles.LeftColumn}>
            <ImageAndName/>
            <NavigationBar/>
          </div>
          <div className={styles.Container}>
            {body.isProfilePage && <ProfilePage/>}
            {body.isCoursesPage && <CoursesPage/>}
            {body.isSettingsPage && <SettingsPage id={id}/>}
            {body.isTrainerPage && <TrainerPage/>}
          </div>
        </div>}
      {!userData && <LoadingScreen/>}
    </AccountContext.Provider>
    );
};

export default AccountPage;