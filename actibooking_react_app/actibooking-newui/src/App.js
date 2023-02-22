import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';


function App() {
  return (
      <div className='Container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
