import React from "react";
import "./SingleOrganization.css";
import DeleteDataHandler from "../data/DeleteDataHandler";
import ConstantsOrganizations from "../constants/Constants";

const SingleOrganization = props => {

    const DeleteHandler = () => {
        let deleteElementUrl = `${ConstantsOrganizations.API_URL_DELETE_ORGANIZATION}/${props.id}`
        DeleteDataHandler(deleteElementUrl);
        props.needReload();
    }

    return (
        <div className="SingleOrganization__container">
            <ul>
                <div>Id {props.id}</div>
                <div>Name: {props.name}</div>
                <div>Courses: {props.course? props.course : "None"}</div>
                <div>Adresses: {props.adresses? props.adresses : "None"}</div>
                <button className="DeleteButton" onClick={DeleteHandler}>Delete</button>
            </ul>
        </div>
    )
}
export default SingleOrganization;