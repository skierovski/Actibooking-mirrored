import React from "react"
import NewOrganizationForm from "../NewOrganization/NewOrganizationForm";
import PostDataHandler from "../data/PostDataHandler";
import ConstantsOrganizations from "../constants/Constants"

const CreateOrganization = () => {


    const postOrganizationHandler = (organization)=>{
        PostDataHandler(ConstantsOrganizations.API_URL_CREATE_ORGANIZATION,organization);
    }

    return (
        <div>
            <h2><strong>Create your organization !</strong></h2>
            <NewOrganizationForm postOrganization = {postOrganizationHandler}/>
        </div>
    )
}
export default CreateOrganization;