import React from "react"

const SingleOrganization = props => {
    return (
        <div>
            <ul>
                <li>{props.id}</li>
                <li>{props.name}</li>
                <li>{props.course ?? "None"}</li>
                <li>{props.adresses ?? "None"}</li>
            </ul>
        </div>
    )
}
export default SingleOrganization;