const API_BASE_URL = 'https://localhost:7127/api';

const AdressesEndpoints = {
    GET_ALL_ADRESSES: 'get-all-adresses',
    CREATE_ADRESS: 'create-adress',
    DELETE_ADRESS: 'delete-adress',
    UPDATE_ADRESS: 'update-adress'
}

const AdressesURL = {
    API_URL_GET_ALL_ADRESSES: `${API_BASE_URL}/${AdressesEndpoints.GET_ALL_ADRESSES}`,
    API_URL_CREATE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.CREATE_ADRESS}`,
    API_URL_DELETE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.DELETE_ADRESS}`,
    API_URL_UPDATE_ADRESS: `${API_BASE_URL}/${AdressesEndpoints.UPDATE_ADRESS}`
}

const ConstantsAdresses = AdressesURL


export default ConstantsAdresses;