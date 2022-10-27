import ConstantsOrganizations from "../constants/Constants"

const CreateOrganizationDataHandler = (organization) => {
    fetch(ConstantsOrganizations.API_URL_CREATE_ORGANIZATION,{
        method:"POST"
    })
    .then(response => response.json())
    .then(organization => {
        console.log(organization);
    })
}
export default CreateOrganizationDataHandler;