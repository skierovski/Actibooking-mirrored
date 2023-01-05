import styles from "./CoursesBody.module.css";
import buttonStyles from "../../../Account/ProfilePage/ProfilePage.module.css"
import CookiesContext from "../../../../Context/cookies-context";
import { useContext } from "react";
import SignUpPostDataHandler from "../../../FetchMethods/PostMethods/SignUpPostDataHandler";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrganizationContext from "../../../../Context/organization-context";

const CorsesBody = (props) => {
  const courses = props.organizationDescription; 
  const cookies_ctx = useContext(CookiesContext) 
  const token = cookies_ctx.GetCookie("token")
  const userId = cookies_ctx.DecodeToken(token)
  const organization_ctx = useContext(OrganizationContext);
  console.log(organization_ctx)

  const AddUser = (props) => {
    const data = {
      courseId: props,
      actiBookingUserId: userId.uid
    }
    SignUpPostDataHandler('https://localhost:7127/api/User/Add-user-to-course',data, ResponseHandler)
  }

  const ResponseHandler = (props) => {
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
      <div className={styles.coursesConrainer}> 
        <img src={o.imageUrl}></img>
        <p>{o.name}</p>
        <p>Cost:{o.cost}</p>
        <p>Minimun Age:{o.minAge}</p>
        <p>Maximum Age:{o.maxAge}</p>
        {o.participant ? <p>Free slots:{o.maxNumbersOfParticipants}</p> : <p>Free slots:{o.maxNumbersOfParticipants}</p>}
        <button className={buttonStyles.ProfileButton} onClick={() => AddUser(o.id)} >Book slot</button>
      </div>
     ))}
     <ToastContainer />
    </>
  ) 
};

export default CorsesBody;
