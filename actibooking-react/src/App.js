import React, {useState} from "react";
import {Route, Routes} from "react-router-dom"
import NaviBar from "./navibar/Navibar";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import CreateOrganization from "./pages/CreateOrganization";
import Organizations from "./pages/Organizations";

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
