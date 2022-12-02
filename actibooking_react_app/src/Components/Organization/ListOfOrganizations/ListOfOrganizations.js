import { useState } from "react";
import styles from "./ListOfOrganizations.module.css";
import AllOrganizations from "../../../Data/MostPopularOrganizationData";
import OrganizationContainer from "../OrganizationContainer/OrganizationContainer";
import Navibar from "../../Navibar/Navibar";
import Footer from "../../Footer/Footer";
const ListOfOrganizations = () => {
  const [startOrg, setStartOrg] = useState(0);
  const [endOrg, setEndOrg] = useState(10);

  return (
    <>
      <Navibar />
      <div className={styles.organizations}>
        <div className={styles.Container}>
          {AllOrganizations.filter((o) => o.isPublic)
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
      <Footer />
    </>
  );
};

export default ListOfOrganizations;
