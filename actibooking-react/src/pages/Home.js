import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {

    if (props.userStatus === true) return (<div><Link to="/Organization/Create">Create Organization</Link></div>)
    else return (
        <div>
            Home
        </div>
    )
}
export default Home;