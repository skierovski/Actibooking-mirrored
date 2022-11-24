import './App.css';
import HomePage from './Components/HomePage/HomePage';
import {Route, Routes} from "react-router-dom";
import SingleOrganizationPage from "../src/Components/Organization/SingleOrganizationPage/SingleOrganizationPage";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Organizations/:id" element={<SingleOrganizationPage/>}/>
    </Routes>
    </>
  );
}

export default App;
