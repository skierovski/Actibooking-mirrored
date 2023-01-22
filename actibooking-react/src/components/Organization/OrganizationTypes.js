import React from "react";
import AccessGranted from "../InfoPages/AccessGranted";
import AccessDenied from "../InfoPages/AccessDenied";

const OrganizationTypes = () => {
    
    
    return(
        <>
        {localStorage.getItem("UserRole") === "Admin" ? <AccessGranted/> : <AccessDenied/>}
        </>
    )
}

export default OrganizationTypes;