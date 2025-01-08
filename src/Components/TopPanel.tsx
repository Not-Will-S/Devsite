import { Link } from "react-router-dom"

function TopPanel(){
    return(
        <div className="top-panel">
            <div className="navigation-container">
                <p className="navigation-button"><Link to="/">About</Link></p>
                <p className="navigation-button"><Link to="/Projects" >Projects</Link></p>
                <p className="navigation-button"><Link to="/Experience">Experience</Link></p>
                <p className="navigation-button"><Link to ="/Contact" >Contact</Link></p>
            </div>
        </div>
    )
}

export default TopPanel