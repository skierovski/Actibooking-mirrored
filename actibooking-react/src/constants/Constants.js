const API_BASE_URL = 'https://localhost:7127/api';



const OrganizationEndpoints = {
    GET_ALL_ORGANIZATIONS: 'Organizations/get-all-organizations',
    CREATE_ORGANIZATION: 'Organizations/create-organization',
    DELETE_ORGANIZATION: 'Organizations/delete-organization',
    UPDATE_ORGANIZATION: 'Organizations/update-organization'
}

const CoursesEndpoints = {
    GET_ALL_COURSES: 'get-all-courses',
    CREATE_COURSE: 'create-course',
    DELETE_COURSE: 'delete-course',
    UPDATE_COURSE: 'update-course'
}

const AdressesEndpoints = {
    GET_ALL_ADRESSES: 'get-all-adresses',
    CREATE_ADRESS: 'create-adress',
    DELETE_ADRESS: 'delete-adress',
    UPDATE_ADRESS: 'update-adress'
}

const OrganizationsURL = {
    API_URL_GET_ALL_ORGANIZATIONS: `${API_BASE_URL}/${OrganizationEndpoints.GET_ALL_ORGANIZATIONS}`,
    API_URL_CREATE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.CREATE_ORGANIZATION}`,
    API_URL_DELETE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.DELETE_ORGANIZATION}`,
    API_URL_UPDATE_ORGANIZATION: `${API_BASE_URL}/${OrganizationEndpoints.UPDATE_ORGANIZATION}`
}

const CoursesURL = {
    API_URL_GET_ALL_COURSES: `${API_BASE_URL}/${CoursesEndpoints.GET_ALL_COURSES}`,
    API_URL_CREATE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.CREATE_COURSE}`,
    API_URL_DELETE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.DELETE_COURSE}`,
    API_URL_UPDATE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.UPDATE_COURSE}`
}

const AdressesURL = {
    API_URL_GET_ALL_ADRESSES: `${API_BASE_URL}/${AdressesEndpoints.GET_ALL_ADRESSES}`,
    API_URL_CREATE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.CREATE_ADRESS}`,
    API_URL_DELETE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.DELETE_ADRESS}`,
    API_URL_UPDATE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.UPDATE_ADRESS}`
}

const ConstantsOrganizations = OrganizationsURL
const ConstantsCourses = CoursesURL
const ConstantsAdresses = AdressesURL


export default ConstantsOrganizations;