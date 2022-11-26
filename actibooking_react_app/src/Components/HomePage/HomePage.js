import Footer from "../Footer/Footer";
import VideoWrapper from "../VideoWrapper/VideoWrapper";
import Navibar from "../Navibar/Navibar";
import MostPopularOrganization from "../MostPupularOrganization/MostPopularOrganization";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import CategorySlideCard from "../CategorySlideCard/CategorySlideCard";
import ScrollMotion from "../ScrollMotion/ScrollMotion";
const HomePage = () => {
  return (
    <>
      <VideoWrapper>
        <Navibar />
        <SearchBarContainer />
      </VideoWrapper>
      <MostPopularOrganization />
      <CategorySlideCard />
      <ScrollMotion />
      <Footer />
    </>
  );
};

export default HomePage;
