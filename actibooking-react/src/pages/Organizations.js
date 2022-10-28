import React, {useState} from "react";
import SingleOrganization from "../SingleOrganizationView/SingleOrganization";
import GetDataHandler from "../data/GetDataHandler";
import ConstantsOrganizations from "../constants/Constants";

const Organizations = () => {

    const [listOfOrganizations, setListOfOrganizations] = useState(null);

    const getDataHandler = () => {
        GetDataHandler(ConstantsOrganizations.API_URL_GET_ALL_ORGANIZATIONS, setListOfOrganizations);
    }

    if (listOfOrganizations == null) return (<button onClick={getDataHandler()}>Loading...</button>);
    else return (
        <div>
            {listOfOrganizations.map(o => (<SingleOrganization key = {o.id} id={o.id} name = {o.name} courses= {o.courses} needReload = {getDataHandler} adresses = {o.adresses}></SingleOrganization>))}
        </div>
    )
}
export default Organizations;