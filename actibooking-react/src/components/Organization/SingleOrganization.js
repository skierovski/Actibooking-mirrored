import React from "react";
import "./SingleOrganization.css";
import ConstantsOrganizations from "../../constants/Constants";

const SingleOrganization = props => {

    const DeleteHandler = () => {
        let deleteElementUrl = `${ConstantsOrganizations.API_URL_DELETE_ORGANIZATION}/${props.id}`;
        let token = localStorage.getItem("token");
        props.DeleteOrganization(deleteElementUrl, token);
    }
    
    return (
        <div className="SingleOrganization__container">
            <ul>
                <div>Id {props.id}</div>
                <div>Name: {props.name}</div>
                <div>Courses: {props.course? props.course : "None"}</div>
                {localStorage.getItem("UserRole") === "Admin" && <button className="DeleteButton" onClick={DeleteHandler}>Delete</button>}
            </ul>
        </div>
    )
}
export default SingleOrganization;