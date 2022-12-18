import { useState } from "react";
import styles from "./ListOfOrganizations.module.css";
import OrganizationContainer from "../OrganizationContainer/OrganizationContainer";
import Navibar from "../../Navibar/Navibar";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import OrganizationsFilter from "../OrganizationsFilter/OrganizationsFilter";
import LoadingScreen from "../../DefaultModels/LoadingScreen/LoadingScreen";

const ListOfOrganizations = () => {
  const [startOrg, setStartOrg] = useState(0);
  const [endOrg, setEndOrg] = useState(6);
  const [page, setPage] = useState(1);
  const [data, setData] = useState("");

  const GetData = () => {
    GetDataHandler("https://localhost:7127/api/Organizations", ResponseHandler);
  };

  const ResponseHandler = (props) => {
    setData(props);
  };
  console.log(data);
  const nextPage = () => {
    if (page < data.length / 6) {
      setStartOrg(startOrg + 6);
      setEndOrg(endOrg + 6);
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setStartOrg(startOrg - 6);
      setEndOrg(endOrg - 6);
      setPage(page - 1);
    }
  };
  console.log(data.length);
  return (
    <>
      {data && (
        <>
          <Navibar />
          <OrganizationsFilter />
          <div className={styles.organizations}>
            <div className={styles.pageNumber}>
              <BsFillArrowLeftCircleFill
                className={styles.arrow}
                size={20}
                onClick={prevPage}
              />{" "}
              {page}{" "}
              <BsFillArrowRightCircleFill
                className={styles.arrow}
                size={20}
                onClick={nextPage}
              />
            </div>
            <div className={styles.Container}>
              {data
                .filter((o) => o.isPublic)
                .slice(startOrg, endOrg)
                .map((o) => (
                  <OrganizationContainer
                    key={o.id}
                    id={o.id}
                    logoUrl={o.logoUrl}
                    name={o.name}
                    addresses={o.addresses}
                  />
                ))}
            </div>
          </div>
        </>
      )}
      {!data && <LoadingScreen onLoad={GetData()}/>}
    </>
  );
};

export default ListOfOrganizations;
