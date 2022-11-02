import React, {useState} from "react";
import SingleOrganization from "./SingleOrganization";
import BaseWrapper from "../CardWrappers/BaseWrapper";
import GetDataHandler from "../../data/GetDataHandler";
import DeleteDataHandler from "../../data/DeleteDataHandler";
import ConstantsOrganizations from "../../constants/Constants";

const Organizations = props => {
    const [listOfOrganizations, setListOfOrganizations] = useState(null);

    const getDataHandler = () => {
        GetDataHandler(ConstantsOrganizations.API_URL_GET_ALL_ORGANIZATIONS, setListOfOrganizations);
    }
    const DeleteOrganization = url => {
        DeleteDataHandler(url);
        setTimeout(getDataHandler, 100);
    }
    if (listOfOrganizations == null) return (<div onLoad={getDataHandler()}>Loading...</div>);
    return (
        <div>
            {!listOfOrganizations[0] && <h2>No organization found ;(</h2>}
            {listOfOrganizations.map(o => (<SingleOrganization key = {o.id} id={o.id} name = {o.name} courses= {o.courses} adresses = {o.adresses} DeleteOrganization = {DeleteOrganization} userStatus = {props.userStatus}/>))}
        </div>
    );
}
export default Organizations;