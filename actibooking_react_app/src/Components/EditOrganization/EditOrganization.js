import Footer from "../Footer/Footer";
import Navibar from "../Navibar/Navibar";
import SectionTitle from "../DefaultModels/Titles/SectionTitle";
import { useParams } from "react-router-dom";
import styles from "./EditOrganization.module.css";
import { useState } from "react";
import GetDataHandler from "../FetchMethods/GetDataHandler";
import Accordion from "../DefaultModels/Accordion/Accordion";
import EditDescription from "./EditDescription/EditDescription";
import EditAddress from "../Forms/EditAddress/EditAddress";
const EditOrganization = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const GetData = () => {
    GetDataHandler(
      `https://localhost:7127/api/Organizations/${id}`,
      ResponseHandler
    );
  };

  const ResponseHandler = (props) => {
    console.log(props);
    setData(props);
  };

  return (
    <>
      {data && (
        <>
          <Navibar />

          <div className={styles.EditOrganization}>
            <SectionTitle value="Edit Your Organization" />
            <div className={styles.Container}>
              <Accordion title={"Name"}></Accordion>
              <Accordion title={"Edit Logo"}></Accordion>
              <Accordion title={"Edit Address"}>
                <EditAddress Addresses={data[0].addresses} />
              </Accordion>
              <Accordion title={"Edit Description"}>
                <EditDescription content={data[0].description} />
              </Accordion>
              <Accordion title={"Manage Courses"}></Accordion>
              <Accordion title={"Manage Trainers"}></Accordion>
              <Accordion title={"Manage Photos"}></Accordion>
            </div>
          </div>
          <Footer />
        </>
      )}
      {!data && <div onLoad={GetData()}>Not working</div>}
    </>
  );
};

export default EditOrganization;
