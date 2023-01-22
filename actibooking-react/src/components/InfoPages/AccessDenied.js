import React from "react";
import "./AccessDenied.css"
import BaseWrapper from "../CardWrappers/BaseWrapper";

const AccessDenied = () =>{
    return(
        <BaseWrapper>
            <h1 className="AccessDenied">Access Denied</h1>
            <h1 className="AccessDenied">You're not allowed to view this page {localStorage.getItem("UserRole")}...</h1>
        </BaseWrapper>
    )
}
export default AccessDenied;