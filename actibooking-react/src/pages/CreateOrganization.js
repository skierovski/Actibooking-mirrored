import React from "react"
import NewOrganizationForm from "../NewOrganization/NewOrganizationForm";
import CreateOrganizationDataHandler from "../data/DataHandler";

const CreateOrganization = () => {

    const postOrganizationHandler = (organization)=>{
        CreateOrganizationDataHandler(organization);
    }

    return (
        <div>
            <h2><strong>Create your organization !</strong></h2>
            <NewOrganizationForm postOrganization = {postOrganizationHandler}/>
        </div>
    )
}
export default CreateOrganization;