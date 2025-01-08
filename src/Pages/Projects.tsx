import ProjectInstance from "../Components/ProjectInstance.tsx";
import Ant from "../Images/ant_graphic.png"
import ReactSymbol from "../Images/react.png"
import PlayingCards from "../Images/playing-cards.png"

function Projects(){

    return(
        <div className="projects-page">
            <div>
                <p className="page-title">Projects</p>
            </div>
            <div className="page-description">
                <p>Welcome to my projects page! This page contains a shortlist containing some of the projects
                    i've completed and the different technologies/skills used in these projects.
                    If you would like to view the code and further details please click on the link to go to the associated GitHub page</p>
            </div>
            <div>

                <ProjectInstance 
                    projectTitle="Portfolio Website"
                    projectDescription="This website was built in React using Typescript and hosted on Vite. Modern React design principles were obeyed, 
                    each one of these projects is a modular component function and pages are loaded from the React-Router-DOM. SCSS was also used to make the styling more readable."
                    githubLink="https://github.com/Not-Will-S/Devsite"
                    skillsUsed={["React", "Typescript", "HTML", "CSS", "Webdev", "Frontend"]}
                    imageLink={ReactSymbol}
                />

                <ProjectInstance 
                    projectTitle="Ant Colony Optimisation"
                    projectDescription="In this project a nature inspired approach to the classic bin packing optimisation problem is implemented. Typically ant colony optimisation is a shortest path algorithm, however in this project
                    the path success is determined by a fitness function and the weight of the lightest and heaviest bins. For a more detailed explanation as to how this works please check out the GitHub page, it's a very interesting algorithm!"
                    githubLink="https://github.com/Not-Will-S/Ant-Colony-Optimisation"
                    skillsUsed={["Python", "Algorithm-Optimisations", "Nature-Inspired Computation"]}
                    imageLink={Ant}
                />

                
                <ProjectInstance 
                    projectTitle="Multi-Threaded Card player"
                    projectDescription="This project was created for a second year University Module and shows a competancy in Java and an understanding of Multi-Threading. In this project, any number of players may draw cards from a shared deck and will continue to exchange cards with other players until the win condition for a player has been reached. Each player operates on its own thread simultaneously and each card is reppresented by an object that can be locked and/or unlocked by threads depending on which player has ownership."
                    githubLink="Sample link"
                    skillsUsed={["Java", "Multi-Threading", "Pair Programming"]}
                    imageLink={PlayingCards}
                />
            </div>
        </div>
    )
}

export default Projects