import ConstantsOrganizations from "../constants/Constants"

const CreateOrganizationDataHandler = (organization) => {
    console.log(organization);
    fetch(ConstantsOrganizations.API_URL_CREATE_ORGANIZATION,{
        method:"POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(
            organization
          ),
    })
    .then(response => response.json())
    .then(organization => {
        console.log(organization);
    }).catch(error => {console.error(error)})
}
export default CreateOrganizationDataHandler;