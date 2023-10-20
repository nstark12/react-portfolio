import Card from './Card'
import careerCraft from '../assets/careercraft.png'
import encyclopet from '../assets/encyclopet.png'
import landmarkGolf from '../assets/landmarkgolf.png'
import landmarkStudio from '../assets/landmarkstudio.png'
import dogBlog from '../assets/dogblog.png'
import jate from '../assets/jate.png'

const projects = [
    {
        name: 'CareerCraft Resume Builder',
        description: "This application provides a simple template for users to generate a resume. The application allows users to sign up for CareerCraft's services, and then gives users access to the resume generator. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM",
        img: careerCraft,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git',
        deployed: 'https://career-craft-2e3c88d80d23.herokuapp.com/login',
        technologies: 'NodeJS, Express, Sequelize, MySql2, Bcrypt, PDFmake, Heroku, HTML/CSS'
    },
    {
        name: 'Dog Blog',
        description: "This application is meant for dog lovers and dog owners to share their love and lessons for our furry friends. Users can create an account to read, post, and comment on blog posts all about dogs. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM",
        img: dogBlog,
        github: 'https://github.com/nstark12/dog-blog.git',
        deployed: 'https://dog-blog-a03070a07329.herokuapp.com/login',
        technologies: 'NodeJS, Express, Sequelize, MySql2, Bcrypt, Heroku, HTML/CSS'
    },
    {
        name: 'Progressive Web Application - Text Editor',
        description: 'Just Another Text Editor, or JATE, is a text editor that runs in the browser. JATE features multiple data persistence techniques that act as redundancy if any of the options are not supported by the browser. This application will work offline and can be installed to any computer.',
        img: jate,
        github: 'https://github.com/nstark12/text-editor-pwa.git',
        deployed: 'https://pwa-text-editor-pwa-a311c8b77a83.herokuapp.com/',
        technologies: 'Webpack, IndexedDB, JavaScript'
    },
    {
        name: 'Encyclopet',
        description: 'A simple application to teach a user about any dog or cat breed searched. It also provides random fun facts on cats and dogs.',
        img: encyclopet,
        github: 'https://github.com/nstark12/encyclopet',
        deployed: 'https://nstark12.github.io/encyclopet/',
        technologies: 'Third Party APIs, JavaScript, HTML/CSS'
    },
    {
        name: 'Landmark Golf Course Products',
        description: 'An extensive frontend website for Landmark Golf Course Products that accurately displays their current product offerings.',
        img: landmarkGolf,
        github: 'https://github.com/nstark12/landmark-golf',
        deployed: 'https://rinowood.com/',
        technologies: 'JavaScript, HTML/CSS'
    },
    {
        name: 'Landmark Studio & Design',
        description: 'An extensive frontend website for Landmark Studio & Design that accurately displays their current product offerings.',
        img: landmarkStudio,
        github: 'https://github.com/tjansson-ui/JobReadyResumeBuilder.git',
        deployed: 'https://landmarkstudio.com/',
        technologies: 'JavaScript, HTML/CSS'
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
                                deployed={project.deployed}
                                technologies={project.technologies}
                            
                            />
                        )
                    })}
                    
                </div>
            </div>

        </>

    )
}

export default Projects