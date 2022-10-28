import React, {useState} from "react";
import SingleOrganization from "../SingleOrganizationView/SingleOrganization";
import GetDataHandler from "../data/GetDataHandler";
import ConstantsOrganizations from "../constants/Constants";

const Organizations = () => {

    const [listOfOrganizations, setListOfOrganizations] = useState(null);

    const getDataHandler = () => {
        GetDataHandler(ConstantsOrganizations.API_URL_GET_ALL_ORGANIZATIONS, setListOfOrganizations);
    }

    if (listOfOrganizations == null) return (<div><h2>{listOfOrganizations}</h2><button onClick={getDataHandler}>Get Data</button></div>);
    else return (
        <div>
            {listOfOrganizations.map(o => (<SingleOrganization key = {o.id} id={o.id} name = {o.name} courses= {o.courses} adresses = {o.adresses}></SingleOrganization>))}
        </div>
    )
}
export default Organizations;