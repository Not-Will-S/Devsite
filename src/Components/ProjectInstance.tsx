interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    githubLink: string;
    skillsUsed: string[];
    imageLink: string;
}

function ProjectInstance({projectTitle, projectDescription, githubLink, skillsUsed, imageLink} : ProjectProps){
    return(
        <div className="project-instance">
            <div className="image-container">
                <img src={imageLink}/>
            </div>
            <div className="text-container">
                <div className="title-skills">
                <div className="title">
                    {projectTitle}
                </div>
                <div className="skills">
                    {skillsUsed.map((skill, index) =>(
                        <li key={index} className="skill-list">{skill}</li>
                    ))}

                </div>
            </div>
            <div className="project-description">
                {projectDescription}
            </div>
            <div className="githubLink">
                <p><a href={githubLink}>GitHub</a></p>
                
            </div>

            </div>
            
        </div>
    )   
}

export default ProjectInstance