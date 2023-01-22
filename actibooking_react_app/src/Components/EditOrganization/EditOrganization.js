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
import UploadNewImage from "./UploadNewImage/UploadNewImage";
import EditNameOrganization from "../Forms/EditNameOrganization/EditNameOrganization";
import ManagePhotos from "./ManagePhotos/ManagePhotos";
import Button from "../DefaultModels/Buttons/Button";
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
              <Button value="Show Organization" href="/Organizations/6" />
              <Accordion title={"Name"}>
                <EditNameOrganization id={id} Name={data[0].name} />
              </Accordion>
              <Accordion title={"Edit Logo"}>
                <UploadNewImage id={id} oldUrl={data[0].logoUrl} />
              </Accordion>
              <Accordion title={"Edit Address"}>
                <EditAddress id={id} Addresses={data[0].addresses} />
              </Accordion>
              <Accordion title={"Edit Description"}>
                <EditDescription id={id} content={data[0].description} />
              </Accordion>
              <Accordion title={"Manage Courses"}></Accordion>
              <Accordion title={"Manage Trainers"}></Accordion>
              <Accordion title={"Manage Photos"}>
                <ManagePhotos id={id} />
              </Accordion>
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
