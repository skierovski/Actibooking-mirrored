import Footer from "../Footer/Footer";
import VideoWrapper from "../VideoWrapper/VideoWrapper";
import Navibar from "../Navibar/Navibar";
import MostPopularOrganization from "../MostPupularOrganization/MostPopularOrganization";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import ScrollMotion from "../ScrollMotion/ScrollMotion";
import CategorySlideCard from "../OrganizationsCategorySlider/CategorySlideCard";
const HomePage = () => {
  return (
    <>
      <VideoWrapper>
        <Navibar />
        <SearchBarContainer />
      </VideoWrapper>
      <CategorySlideCard />
      <MostPopularOrganization />

      <ScrollMotion />
      <Footer />
    </>
  );
};

export default HomePage;
