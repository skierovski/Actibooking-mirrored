import Footer from "../../Footer/Footer";
import Navibar from "../../Navibar/Navibar";
import { useParams } from "react-router-dom";
import SingleOrganizationContainer from "./SingleOrganizationContainer";
import { useState, useEffect } from "react";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import OrganizationContext from "../../../Context/organization-context";

const SingleOrganizationPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const newData = {}

  const GetData = async () => {
    await GetDataHandler(
      `https://localhost:7127/api/Organizations/${id}`,
      setData
    );
  };

 


  return (
    <>
    <OrganizationContext.Provider value={{
      GetData
    }}>
      {data && (
        <>
          <Navibar />
          <SingleOrganizationContainer organization={data[0]} />
          <Footer />
        </>
      )}
      {!data && <div onLoad={GetData()}>Not working</div>}
      </OrganizationContext.Provider>
    </>
  );
};

export default SingleOrganizationPage;
