import Footer from "../../Footer/Footer";
import Navibar from "../../Navibar/Navibar";
import { useParams } from "react-router-dom";
import SingleOrganizationContainer from "./SingleOrganizationContainer";
import { useState } from "react";
import GetDataHandler from "../../FetchMethods/GetDataHandler";

const SingleOrganizationPage = () => {
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
          <SingleOrganizationContainer organization={data[0]} />
          <Footer />
        </>
      )}
      {!data && <div onLoad={GetData()}>Not working</div>}
    </>
  );
};

export default SingleOrganizationPage;
