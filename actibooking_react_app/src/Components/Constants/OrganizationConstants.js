const API_BASE_URL = 'https://localhost:7127/api';

const OrganizationEndpoints = {
    GET_ALL_ORGANIZATIONS: 'Organizations',
    GET_SINGLE_ORGANIZATION: 'Organizations/{organizationId}',
    CREATE_ORGANIZATION: 'Organizations/create',
    DELETE_ORGANIZATION: 'Organizations/{organizationId}',
    UPDATE_ORGANIZATION: 'Organizations/update'
}

const OrganizationsURL = {
    API_URL_GET_ALL_ORGANIZATIONS: `${API_BASE_URL}/${OrganizationEndpoints.GET_ALL_ORGANIZATIONS}`,
    API_URL_CREATE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.CREATE_ORGANIZATION}`,
    API_URL_DELETE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.DELETE_ORGANIZATION}`,
    API_URL_UPDATE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.UPDATE_ORGANIZATION}`
}

const ConstantsOrganizations = OrganizationsURL

export default ConstantsOrganizations;