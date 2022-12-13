import Navibar from "../../Navibar/Navibar";
import styles from "./AccountPage.module.css";
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import ImageAndName from "./ImageAndName/ImageAndName";
import AccountPageData from "../../../Data/AccountPageData";
import { useParams } from "react-router-dom";
import GetDataHandler from "../../FetchMethods/GetDataHandler";

const AccountPage = () => {
  const {id}=useParams();
  const [body, setBody] = useState("default");
  const [data, setData] = useState(null);

  const GetData = () =>{
    GetDataHandler(`https://localhost:7127/api/User/${id}`, ResponseHandler)
  }

  const ResponseHandler = (response) => {
      console.log(response.gender)
  }
  const ChangeBody = (content) => {
    setBody(content);
    console.log(body);
  };
  return (
    <>
      <Navibar />
      <div className={styles.Wrapper} onLoad={GetData}>
        <div className={styles.LeftColumn}>
          <ImageAndName data={AccountPageData} />
          <NavigationBar changeBody={ChangeBody} data={AccountPageData} />
        </div>
        <div className={styles.Container}>
          <BodyToReturn body={body} changeBody={ChangeBody} />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
