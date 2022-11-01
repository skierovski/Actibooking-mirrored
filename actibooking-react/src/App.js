import Home from "./Home";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import NaviBar from "./components/navibar/Navibar";
import Organization from "./components/Organization/Organization";
import Organizations from "./components/Organization/Organizations";
import CreateOrganization from "./components/Organization/CreateOrganization";
import BaseWrapper from "./components/CardWrappers/BaseWrapper";
import MainLogo from "./components/Logo/MainLogo";
import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp"

const App = () => {
  let userStatus = false;
  
  return (
    <div>
      <MainLogo/>
      <BaseWrapper><NaviBar userStatus={userStatus}></NaviBar></BaseWrapper>
      <Routes>
        <Route path="/" element={<Home userStatus = {userStatus}/>}/>
        <Route path="/Organization" element={<Organization/>}/>
        <Route path="/Organizations" element={<Organizations userStatus = {userStatus}/>}/>
        <Route path="/Organization/Create" element={<CreateOrganization userStatus = {userStatus}/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
