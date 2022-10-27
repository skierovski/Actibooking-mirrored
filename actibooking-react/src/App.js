import React from "react";
import {Route, Routes} from "react-router-dom"
import NaviBar from "./navibar/Navibar";
import Home from "./pages/Home";
import Organization from "./pages/Organization";

function App() {
  return (
    <div>
    <NaviBar></NaviBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Organization" element={<Organization/>}/>
    </Routes>
    </div>
  );
}

export default App;
