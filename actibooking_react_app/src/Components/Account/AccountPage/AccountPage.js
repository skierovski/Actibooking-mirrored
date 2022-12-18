import Navibar from "../../Navibar/Navibar";
import styles from "./AccountPage.module.css";
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import ImageAndName from "./ImageAndName/ImageAndName";
import { useParams } from "react-router-dom";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import LoadingScreen from "../../DefaultModels/LoadingScreen/LoadingScreen";

const AccountPage = () => {
  const {id}=useParams();
  const [body, setBody] = useState("default");
  const [data, setData] = useState();


  useEffect(()=>{
    GetDataHandler(`https://localhost:7127/api/User/${id}`, ResponseHandler)
  },[])

  const ResponseHandler = (props) => {
    console.log(props);
    setTimeout(() => setData(props), 1000)
  }

  const ChangeBody = (content) => {
    setBody(content);
    console.log(body);
  };
  console.log(data)
  return (
    <>
    <Navibar />
      {data && <>
        <div className={styles.Wrapper}>
          <div className={styles.LeftColumn}>
            <ImageAndName data={data} />
            <NavigationBar changeBody={ChangeBody} data={data} />
          </div>
          <div className={styles.Container}>
            <BodyToReturn body={body} data={data} changeBody={ChangeBody} />
          </div>
        </div></>}
        {!data && <LoadingScreen/>}
      </>
    );
};

export default AccountPage;