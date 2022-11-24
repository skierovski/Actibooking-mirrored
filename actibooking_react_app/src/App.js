import './App.css';
import MostPopularOrganization from './Components/MostPupularOrganization/MostPopularOrganization'
import Navibar from './Components/Navibar/Navibar';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';
import VideoWrapper from './Components/VideoWrapper/VideoWrapper';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
    <VideoWrapper>
      <Navibar/>
      <SearchBarContainer/>
    </VideoWrapper>
    <MostPopularOrganization/>
    <Footer/>
    </>
  );
}

export default App;
