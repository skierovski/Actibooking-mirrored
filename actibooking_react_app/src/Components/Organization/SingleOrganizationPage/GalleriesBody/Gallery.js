import React from "react";

import "./Gallery.css";
const Gallery = ({setSelectedImg, urls})=> {


    return(
        <div className="img-grid">
            {urls && urls.map(url =>(
                <div className="imp-wrap" key={url}
                onClick={()=>setSelectedImg(url)}>
                    <img className="img-gallery" src={url} alt="Organization gallery" />
                </div>

            ))}
        </div>
    )
}

export default Gallery