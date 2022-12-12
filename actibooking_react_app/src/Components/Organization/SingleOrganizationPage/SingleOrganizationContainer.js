import DescriptionBody from "./DescriptionBody/DescriptionBody";
import OrganizationNavbar from "./OrganizationNavbar/OrganizationNabar";
import styles from "./SingleOrganizationContainer.module.css";
import {useState} from 'react'
import TrainersBody from "./TrainersBody/TrainersBody"
import AdressBody from "./AdressBody/AdressBody";

const SingleOrganizationContainer = (params) => {
  const [container, setContainer] = useState(
    {
      description: true,
      adress: false,
      courses: false,
      trainers: false

    }
  );

  const ChangeContainer= (containerName) => {
      ClearContainer();
      if(containerName == "description"){
        setContainer((prevState) => {return {...prevState, description : containerName} })
      }
      else if (containerName == "adress"){
        setContainer((prevState) => {return {...prevState, adress : containerName} })
      }
      else if (containerName == "courses"){
        setContainer((prevState) => {return {...prevState, courses : containerName} })
      }
      else if (containerName == "trainers"){
        setContainer((prevState) => {return {...prevState, trainers : containerName} })
      }
  }

  const ClearContainer = () => {
    setContainer(
      {
        description: false,
        adress: false,
        courses: false,
        trainers: false
  
      }
    )
  }

  const organization = params.organization;
  return (
    <div className={styles.singleOrganizationContainer}>
      <div className={styles.mainDataContainer}>
        <div className={styles.imageContainer}>
          <img
            alt="organization image"
            className={styles.image}
            src={organization.logoUrl}
          />
        </div>
        <div className={styles.mainInfoContainer}>
          <div className={styles.nameContainer}>{organization.name}</div>
        </div>
      </div>
      <OrganizationNavbar changeContainer={ChangeContainer}/>
      { container.description&& <DescriptionBody organizationDescription = {organization.description}/>}
      { container.adress&& <AdressBody organizationAdress = {organization.adresses}/>}
      { container.courses&& <DescriptionBody organizationDescription = {organization.courses}/>}
      { container.trainers&& <TrainersBody organizationDescription = {organization.trainers}/>}


    </div>
  );
};

export default SingleOrganizationContainer;
