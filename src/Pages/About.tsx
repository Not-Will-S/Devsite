import { Link } from "react-router-dom"

function AboutMe(){

    return(
        <div className="about-page">
            <div className="about-me">
                <div>
                    <p className="title">William Smith </p> 
                    <p className="under-text">Computer Science Graduate</p>
                </div>
                <div className="bio-container">
                    <p>Hello! I'm a computer science student graduting from the university of Exeter may 2025 and am currently seeking a graduate or Junior role. </p>
                    <p>Please take a look around my site and portfolio and dont hesitate to reach out and contact me!</p>
                </div>          
            </div>
            <div className="navigation-container">
                <p className="navigation-button"><Link to="/Projects">Projects/skills</Link></p>
                <p className="navigation-button"><Link to="/Experience" >Experience</Link></p>
                <p className="navigation-button"><Link to="/Contact">Links & Contacts</Link></p>
            </div>
            
        </div>
        
    )
}

export default AboutMe