import styles from "./CoursesBody.module.css";
import buttonStyles from "../../../Account/ProfilePage/ProfilePage.module.css"
import CookiesContext from "../../../../Context/cookies-context";
import {  useContext } from "react";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrganizationContext from "../../../../Context/organization-context";
import GetDataHandler from "../../../FetchMethods/GetDataHandler"

const CorsesBody = (props) => {
  const courses = props.organizationDescription; 
  const cookies_ctx = useContext(CookiesContext) 
  const token = cookies_ctx.GetCookie("token")
  const userId = cookies_ctx.DecodeToken(token)
  const organization_ctx = useContext(OrganizationContext);





  const AddUser = async (id, name, date, description) => {
    console.log(id)
    const data = {
      courseId: id,
      actiBookingUserId: userId.uid
    }
    await SignUpPostDataHandler('https://localhost:7127/api/User/Add-user-to-course',data, ResponseHandler)
    await GetDataHandler(`https://localhost:7127/api/Account/CreateEvent/${userId.uid}`)
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
        <button className={buttonStyles.ProfileButton} onClick={() => AddUser(o.id, o.name, o.duration, o.date, o.description)} >Book slot</button>
      </div>
     ))}
     <ToastContainer />
    </>
  ) 
};

export default CorsesBody;
