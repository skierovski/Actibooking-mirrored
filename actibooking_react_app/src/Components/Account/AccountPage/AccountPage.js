import Navibar from "../../Navibar/Navibar";
import styles from "./AccountPage.module.css";
import BodyToReturn from "./BodyToReturn/BodyToReturn";
import { useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import ImageAndName from "./ImageAndName/ImageAndName";
import AccountPageData from "../../../Data/AccountPageData";

const AccountPage = () => {
  const [body, setBody] = useState("default");
  const ChangeBody = (content) => {
    setBody(content);
    console.log(body);
  };
  return (
    <>
      <Navibar />
      <div className={styles.Wrapper}>
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
