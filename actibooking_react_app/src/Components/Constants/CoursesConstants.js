const API_BASE_URL = 'https://localhost:7127/api';

const CoursesEndpoints = {
    GET_ALL_COURSES: 'get-all-courses',
    CREATE_COURSE: 'create-course',
    DELETE_COURSE: 'delete-course',
    UPDATE_COURSE: 'update-course'
}

const CoursesURL = {
    API_URL_GET_ALL_COURSES: `${API_BASE_URL}/${CoursesEndpoints.GET_ALL_COURSES}`,
    API_URL_CREATE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.CREATE_COURSE}`,
    API_URL_DELETE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.DELETE_COURSE}`,
    API_URL_UPDATE_COURSE: `${API_BASE_URL}/${CoursesEndpoints.UPDATE_COURSE}`
}

const ConstantsCourses = CoursesURL

export default ConstantsCourses;