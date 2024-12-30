interface ProjectProps {
    experienceTitle: string;
    experienceDescription: string;
    imageLink: string;
}

function ExperienceInstance({experienceTitle, experienceDescription, imageLink} : ProjectProps){
    return(
        <div className="experience-instance">
            <div className="image">
                <img src={imageLink} alt="" />
            </div>
            <div className="experience">
                <div className="experience-title">
                    {experienceTitle}
                </div>
                <div className="description">
                    {experienceDescription}
                </div>
                
            </div>
        </div>
            
        
    )   
}

export default ExperienceInstance