import { useState } from "react";
import styles from "./ListOfOrganizations.module.css";
import AllOrganizations from "../../../Data/MostPopularOrganizationData";
import OrganizationContainer from "../OrganizationContainer/OrganizationContainer";
import Navibar from "../../Navibar/Navibar";
import Footer from "../../Footer/Footer";
import GetDataHandler from "../../FetchMethods/GetDataHandler";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import OrganizationsFilter from "../OrganizationsFilter/OrganizationsFilter";
const ListOfOrganizations = () => {
  const [startOrg, setStartOrg] = useState(0);
  const [endOrg, setEndOrg] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const GetData = () =>{
    GetDataHandler('https://localhost:7127/api/Organizations', ResponseHandler)
  }

  const ResponseHandler = (props) => {
    console.log(props);
    setData(props)

  }

  const nextPage = () => {
    if (page < AllOrganizations.length % 4) {
      setStartOrg(startOrg + 4);
      setEndOrg(endOrg + 4);
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setStartOrg(startOrg - 4);
      setEndOrg(endOrg - 4);
      setPage(page - 1);
    }
  };

  return (
    <>
    {data &&
    <>
      <Navibar />
      <OrganizationsFilter/>
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
          {data.filter((o) => o.isPublic)
            .slice(startOrg, endOrg)
            .map((o) => (
              <OrganizationContainer
                key={o.id}
                id={o.id}
                logoUrl={o.logoUrl}
                name={o.name}
                adress={o.adresses}
              />
            ))}
        </div>
      </div>
      </>}
     {!data && <div  onLoad={GetData()}>Not working</div>}
    </>
  );
};

export default ListOfOrganizations;
