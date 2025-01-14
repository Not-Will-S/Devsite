import ProjectInstance from "../Components/ProjectInstance.tsx";
import Ant from "../Images/ant_graphic.png"
import ReactSymbol from "../Images/react.png"
import PlayingCards from "../Images/playing-cards.png"
import CreditCard from "../Images/Credit-Card.png"
import Emoji from "../Images/emoji.png"

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
                    projectTitle="Machine Learning Credit-Card default prediction"
                    projectDescription="In this project a machine learning model was created with the aim of classifiying a credit card holder as likely to default and unlikely to default based on holder data such as education level, spending habits etc. 
                    The project demonstrates advanced techniques in data preprocessing, neural network modeling, and ensemble learning using Python and TensorFlow/Keras. The final model enhances accuracy by combining predictions from two pre-requisite models.
                    Please visit the GitHub for the full README"
                    githubLink="https://github.com/Not-Will-S/Credit-Card-Prediction"
                    skillsUsed={["Python", "Machine-Learning", "Data Preprocesing"]}
                    imageLink={CreditCard}
                />

                <ProjectInstance 
                    projectTitle="Multi-Threaded Card player"
                    projectDescription="This project was created for a second year University Module and shows a competancy in Java and an understanding of Multi-Threading. In this project, any number of players may draw cards from a shared deck and will continue to exchange cards with other players until the win condition for a player has been reached. Each player operates on its own thread simultaneously and each card is represented by an object that can be locked and/or unlocked by threads depending on which player has ownership."
                    githubLink="https://github.com/Not-Will-S/Multithread-CardGame"
                    skillsUsed={["Java", "Multi-Threading", "Pair Programming"]}
                    imageLink={PlayingCards}
                />

                <ProjectInstance 
                    projectTitle="Pair Matching website"
                    projectDescription="This project was created for a first year University module in web development and uses PHP. In this project users are faced with a pair matching memory game, face down cards have randomly generated emojis
                    that must be paired with each other. Users have the option to create accounts and register their high scores to a leaderboard."
                    githubLink="https://github.com/Not-Will-S/Website-Snap-Game"
                    skillsUsed={["PHP", "WebDev"]}
                    imageLink={Emoji}
                />
                
            </div>
        </div>
    )
}

export default Projects