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
                experienceTitle="Student at University of Exeter (2022 - 2025)"
                experienceDescription="Full time student studying at the University of Exeter. As part of my university eduction i've completed practical projects and exams for industry relevant modules such as 'Artificial Intelligence and applications', 'Database theory and design',
                'Network and Computer Security', 'Software Development', ' Group Software Engineering' and 'The C Family'. I'm currently undertaking a dissertation in the use of computer vision and Cellular Automata in forest fire prediction.   "
                imageLink={UOE}
            />

            <ExperienceInstance
                experienceTitle="Junior Software Developer at CTM Wales (June - Sep 2024)"
                experienceDescription="Worked in the software development team in a large NHS organisation, multiple projects included collaborative working as well as individual and independent tasks. I gained experience of using FHIR standards (fast hospital interoperability resource) to ensure persistent data transfer, integrity of data and interoperability.  I attended and participated in daily scrum meetings to ensure individual and project work progressed to timescales. 
                Project work went through multiple code reviews by senior developers with limited remedial work required. I developed my communication and presentations skills by demonstrating and working through code and design to multiple senior stakeholders. I demonstrated strong analytical skills when interpreting broad design principles and individually developing a software solution for review and presentation to the wider development and project team.
                "
                imageLink={CTM}
            />
        </div>
    )
}

export default Experience