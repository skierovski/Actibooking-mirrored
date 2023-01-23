import styles from "./CoursesBody.module.css";
import buttonStyles from "../../../Account/ProfilePage/ProfilePage.module.css"
import CookiesContext from "../../../../Context/cookies-context";
import {  useContext } from "react";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrganizationContext from "../../../../Context/organization-context";
import LogInPostDataHandler from "../../../FetchMethods/PostMethods/LogInPostDataHandler";

const CorsesBody = (props) => {
  const courses = props.organizationDescription; 
  console.log(courses)
  const cookies_ctx = useContext(CookiesContext) 
  const token = cookies_ctx.GetCookie("token")
  const userId = cookies_ctx.DecodeToken(token)
  const organization_ctx = useContext(OrganizationContext);





  const AddUser = async (id, name, duration, date, description, hour) => {
    console.log(id)
    const data = {
      courseId: id,
      actiBookingUserId: userId.uid
    }
    const eventData = {
      name: name,
      date, date,
      description: description,
      hour: hour,
      duration: duration,
      actiBookingUserId: userId.uid
    }
    await SignUpPostDataHandler('https://localhost:7127/api/User/Add-user-to-course',data, ResponseHandler)
    await LogInPostDataHandler(`https://localhost:7127/api/Account/CreateEvent`, eventData)
  }

  const ResponseHandler = (props) => {
    console.log(props)
    if(props.ok){
      toast.success("You Sign Up for Course",{
        position: toast.POSITION.TOP_CENTER
      })
      setTimeout(() => organization_ctx.GetData(), 2000)
    }
    else{
      toast.warn("Something went wrong",{
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  return(
    <>
    {courses.map(o => o.maxNumbersOfParticipants - o.numberOfParticipants > 0 && 
    (
      
      <div className={styles.coursesContainer}> 
        <div className={styles.ImageTitle}>{/* <img src={o.imageUrl}></img> */}
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
        <p>Hour: {o.hour}:00</p>
        <p>Free slots:{o.maxNumbersOfParticipants - o.numberOfParticipants}</p>
        </div>
        </div>
        <button style={{color: "white"}} className={buttonStyles.ProfileButton} onClick={() => AddUser(o.id, o.name, o.duration, o.date, o.description, o.hour)} >Book slot</button>
      </div>
     ))}
     <ToastContainer />
    </>
  ) 
};

export default CorsesBody;
