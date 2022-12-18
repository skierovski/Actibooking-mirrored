import Navibar from "../../Navibar/Navibar";
import styles from "./AccountPage.module.css";
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import ImageAndName from "./ImageAndName/ImageAndName";
import { useParams } from "react-router-dom";
import GetDataHandler from "../../FetchMethods/GetDataHandler";

const AccountPage = () => {
  const {id}=useParams();
  const [body, setBody] = useState("default");
  const [data, setData] = useState();


  const GetData = () =>{
    GetDataHandler(`https://localhost:7127/api/User/${id}`, ResponseHandler)
  }

  const ResponseHandler = (props) => {
    console.log(props);
    setData(props)

  }

  const ChangeBody = (content) => {
    setBody(content);
    console.log(body);
  };
  console.log(data)
  return (
    <>
      {data && <><Navibar />
        <div className={styles.Wrapper}>
          <div className={styles.LeftColumn}>
            <ImageAndName data={data} />
            <NavigationBar changeBody={ChangeBody} data={data} />
          </div>
          <div className={styles.Container}>
            <BodyToReturn body={body} data={data} changeBody={() => ChangeBody()}/>
          </div>
        </div></>}
        {!data && <div  onLoad={GetData()}>Not working</div>}
      </>
    );
};

export default AccountPage;