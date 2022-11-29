import Footer from "../../Footer/Footer";
import Navibar from "../../Navibar/Navibar";
import styles from "./SingleOrganizationPage.module.css";
import { useParams } from "react-router-dom";
import MostPopularOrganizationData from "../../../Data/MostPopularOrganizationData";
import SingleOrganizationContainer from "./SingleOrganizationContainer";

const SingleOrganizationPage = () => {
    const {id}=useParams();
    const organization = MostPopularOrganizationData.find(o => o.id == id)
    return (
        <>
            <Navibar/>
            <SingleOrganizationContainer organization={organization}/>
            <Footer/>
        </>
    )
}

export default SingleOrganizationPage;