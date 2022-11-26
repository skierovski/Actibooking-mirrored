import Footer from "../Footer/Footer";
import VideoWrapper from "../VideoWrapper/VideoWrapper";
import Navibar from "../Navibar/Navibar";
import MostPopularOrganization from "../Organization/MostPupularOrganization/MostPopularOrganization";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import CategorySlideCard from "../Organization/OrganizationsCategorySlider/CategorySlideCard";
const HomePage = () => {
  return (
    <>
      <VideoWrapper>
        <Navibar />
        <SearchBarContainer />
      </VideoWrapper>
      <MostPopularOrganization />
      <CategorySlideCard />
      <Footer />
    </>
  );
};

export default HomePage;
