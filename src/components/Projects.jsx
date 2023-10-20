import Card from './Card'
import careerCraft from '../assets/careercraft.png'

const projects = [
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
    {
        name: 'CareerCraft Resume Builder',
        description: 'Description',
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git'
    },
]

const Projects = () => {
    

    return (
        <>
            <div className="container my-5 projects">
                <h1>My Projects</h1>
                <div className="projects">

                 
                    {projects.map(project => {
                        return (
                            <Card 
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                github={project.github}
                            
                            />
                        )
                    })}
                    
                </div>
            </div>

        </>

    )
}

export default Projects