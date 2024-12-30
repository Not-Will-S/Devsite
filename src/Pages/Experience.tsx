import UOE from "../Images/UoE_logo.png"
import CTM from "../Images/CWM.png"
import ExperienceInstance from "../Components/ExperienceInstance"

function Experience(){

    return(
        <div className="experience-page">
            <div className="center-title">
                <p>Experience</p>               
            </div>
            <ExperienceInstance
                experienceTitle="Student at University of Exeter"
                experienceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                imageLink={UOE}
            />

            <ExperienceInstance
                experienceTitle="Junior Software Developer at CTM Wales"
                experienceDescription="Worked in the software development team in a large NHS organisation, multiple projects included collaborative working as well as individual and independent tasks. I gained experience of using FHIR standards (fast hospital interoperability resource) to ensure persistent data transfer, integrity of data and interoperability.  I attended and participated in daily scrum meetings to ensure individual and project work progressed to timescales. 
Project work went through multiple code reviews by senior developers with limited remedial work required. I developed my communication and presentations skills by demonstrating and working through code and design to multiple senior stakeholders. I demonstrated strong analytical skills when interpreting broad design principles and individually developing a software solution for review and presentation to the wider development and project team.
"
                imageLink={CTM}
            />
        </div>
    )
}

export default Experience