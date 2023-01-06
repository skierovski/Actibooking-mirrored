import styles from "./CoursesBody.module.css";
import buttonStyles from "../../../Account/ProfilePage/ProfilePage.module.css"
import CookiesContext from "../../../../Context/cookies-context";
import { useContext, useEffect } from "react";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrganizationContext from "../../../../Context/organization-context";
import ApiCalendar from 'react-google-calendar-api';

const CorsesBody = (props) => {
  const courses = props.organizationDescription; 
  const cookies_ctx = useContext(CookiesContext) 
  const token = cookies_ctx.GetCookie("token")
  const userId = cookies_ctx.DecodeToken(token)
  const organization_ctx = useContext(OrganizationContext);
  const config = {
    "clientId": "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com",
    "apiKey": "AIzaSyAW8PfRgim8H_FFQ2NwG2wyFqRJzXlf4X8",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }
  const apiCalendar = new ApiCalendar(config)

  const AddUser = (id, name, duration) => {
    console.log(id)
    const data = {
      courseId: id,
      actiBookingUserId: userId.uid
    }
    SignUpPostDataHandler('https://localhost:7127/api/User/Add-user-to-course',data, ResponseHandler)
    const eventFromNow = {
      summary: name,
      time: duration,
    };
    apiCalendar.handleAuthClick(config)
    apiCalendar.createEventFromNow(eventFromNow)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const ResponseHandler = (props) => {
    console.log(props)
    props.ok ? toast.success("You Sign Up for Course",{
      position: toast.POSITION.TOP_CENTER
    }): toast.warn("Something went wrong",{
      position: toast.POSITION.TOP_CENTER
    })
    organization_ctx.RefreshData()
  }

  return(
    <>
    {courses.map(o => (      
      <div className={styles.coursesContainer}> 
        <div className={styles.ImageTitle}><img src={o.imageUrl}></img>
        <p>{o.name}</p>
        </div>
        <div className={styles.MiddleWrapper}>
          <div className={styles.Description}><p>{o.description}</p></div>
        <div className={styles.Information}>
        <p>Cost: {o.cost}</p>
        <p>Minimun Age: {o.minAge}</p>
        <p>Maximum Age: {o.maxAge}</p>
        <p>Date: {o.date} </p>
        <p>Day Of Week: {o.dayOfWeek} </p>
        {o.participant ? <p>Free slots:{o.maxNumbersOfParticipants}</p> : <p>Free slots:{o.maxNumbersOfParticipants}</p>}
        </div>
        </div>
        <button className={buttonStyles.ProfileButton} onClick={() => AddUser(o.id, o.name, o.duration)} >Book slot</button>
      </div>
     ))}
     <ToastContainer />
    </>
  ) 
};

export default CorsesBody;
