import './App.css';
import Navibar from './Components/Navibar/Navibar';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';
import VideoWrapper from './Components/VideoWrapper/VideoWrapper';

function App() {
  return (
    <VideoWrapper>
      <Navibar/>
      <SearchBarContainer/>
    </VideoWrapper>
  );
}

export default App;
