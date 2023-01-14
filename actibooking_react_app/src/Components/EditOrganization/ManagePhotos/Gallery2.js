import React from "react";

import "./Gallery2.css";
const Gallery2 = ({setSelectedImg, urls})=> {


    return(
        <div className="img-grid2">
            {urls && urls.map(url =>(
                <div className="imp-wrap" key={url}
                onClick={()=>setSelectedImg(url)}>
                    <img className="img-gallery" src={url} alt="Organization gallery" />
                </div>

            ))}
        </div>
    )
}

export default Gallery2