import React, {useState} from "react";
import {Route, Routes} from "react-router-dom"
import NaviBar from "./components/navibar/Navibar";
import Home from "./Home";
import Organization from "./components/Organization/Organization";
import CreateOrganization from "./components/Organization/CreateOrganization";
import Organizations from "./components/Organization/Organizations";

function App() {

  const [isUserLogin, setIsUserLogin] = useState();

  const isLoginHandler = (isLogin) => {
    setIsUserLogin(isLogin);
  }
  let userStatus = isUserLogin;

  return (
    <div>
    <NaviBar isLogin = {isLoginHandler}></NaviBar>
    <Routes>
      <Route path="/" element={<Home userStatus = {userStatus}/>}/>
      <Route path="/Organization" element={<Organization/>}/>
      <Route path="/Organizations" element={<Organizations/>}/>
      <Route path="/Organization/Create" element={<CreateOrganization/>}/>
    </Routes>
    </div>
  );
}

export default App;
