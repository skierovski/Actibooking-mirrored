import React from "react";
import "./Img.css";
const Img = ({ selectedImg, setSelectedImg }) => {
    const handleClick= (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
  return (
    <div className="backdrop" onClick={handleClick}>
      <img className="img-backdrop" src={selectedImg} alt="Full img" />
    </div>
  );
};
export default Img;
