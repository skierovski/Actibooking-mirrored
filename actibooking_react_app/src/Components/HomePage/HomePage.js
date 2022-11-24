import Footer from "../Footer/Footer";
import VideoWrapper from "../VideoWrapper/VideoWrapper";
import Navibar from "../Navibar/Navibar";
import MostPopularOrganization from "../MostPupularOrganization/MostPopularOrganization";
import SearchBarContainer from "../SearchBar/SearchBarContainer"
const HomePage = () =>{
    return (
        <>
        <VideoWrapper>
            <Navibar/>
            <SearchBarContainer/>
        </VideoWrapper>
        <MostPopularOrganization/>
        <Footer/>
        </>
    )
}

export default HomePage;