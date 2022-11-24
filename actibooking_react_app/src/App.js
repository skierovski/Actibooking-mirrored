import './App.css';
import MostPopularOrganization from './Components/MostPupularOrganization/MostPopularOrganization'
import Navibar from './Components/Navibar/Navibar';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';
import VideoWrapper from './Components/VideoWrapper/VideoWrapper';

function App() {
  return (
    <div className="App">
    <VideoWrapper>
      <Navibar/>
      <SearchBarContainer/>
    </VideoWrapper>
    <MostPopularOrganization/>
    </div>
  );
}

export default App;
