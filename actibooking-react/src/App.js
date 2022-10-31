import Home from "./Home";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import NaviBar from "./components/navibar/Navibar";
import Organization from "./components/Organization/Organization";
import Organizations from "./components/Organization/Organizations";
import CreateOrganization from "./components/Organization/CreateOrganization";
import BaseWrapper from "./components/CardWrappers/BaseWrapper";
import MainLogo from "./components/Logo/MainLogo";

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState();

  const isLoginHandler = (isLogin) => {
    setIsUserLogin(isLogin);
  }
  let userStatus = isUserLogin;
  
  return (
    <div>
      <MainLogo/>
      <BaseWrapper><NaviBar isLogin = {isLoginHandler}></NaviBar></BaseWrapper>
      <Routes>
        <Route path="/" element={<Home userStatus = {userStatus}/>}/>
        <Route path="/Organization" element={<Organization/>}/>
        <Route path="/Organizations" element={<Organizations userStatus = {userStatus}/>}/>
        <Route path="/Organization/Create" element={<CreateOrganization userStatus = {userStatus}/>}/>
      </Routes>
    </div>
  );
}

export default App;
