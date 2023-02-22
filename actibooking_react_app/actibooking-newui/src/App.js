import './App.css';
import { useState, React, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import ResponsiveContext from './Context/ResponsiveContext';



function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    
}

    window.addEventListener('resize', handleResize)
  })

  return (
      <div className='Container'>
        <ResponsiveContext.Provider value={{screenWidth: width}}>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </ResponsiveContext.Provider >
        
      </div>
  );
}

export default App;
