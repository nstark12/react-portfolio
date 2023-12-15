import Card from "./Card";
import careerCraft from "../assets/careercraft-min.jpg";
import encyclopet from "../assets/encyclopet-min.jpg";
import landmarkGolf from "../assets/landmarkgolf-min.jpg";
import landmarkStudio from "../assets/landmarkstudio-min.jpg";
import dogBlog from "../assets/dogblog-min.jpg";
import jate from "../assets/jate-min.jpg";
import myCookbook from "../assets/mycookbook-min.jpg";
import scripts from "../assets/scripts-login-min.jpg";
import bigPie from "../assets/bigpie.jpg";

const projects = [
  {
    name: "bigPie Pizza",
    description:
      "bigPie Pizza is a food ordering application that allows users to login or register to order a variety of different food items. The user can checkout using Stripe. The application also allows admin users to add, update, and/or delete categories and menu items. The admin(s) can also view and edit all users and see all orders and whether or not they have been paid. All users with an account are able to view and edit their profile as well as see their past orders. This application is hosted on Vercel.",
    img: bigPie,
    github: "https://github.com/nstark12/bigpie-pizza",
    deployed: "https://bigpie-pizza.vercel.app/",
    technologies: "NextJS, React, MongoDB, Stripe, HTML/CSS",
  },
  {
    name: "<scripts />",
    description:
      "<scripts /> is a social media platform tailored to the needs of software developers and programmers. This platform facilitates connections among developers by enabling users to craft and share posts, consequently fostering a network of followers and connections. This application is powered by MERN stack and hosted on Heroku.",
    img: scripts,
    github: "https://github.com/lizf57/scripts-connect-coders",
    deployed:
      "https://scripts-connects-coders-15b85f76118d.herokuapp.com/login",
    technologies:
      "React, Apollo, GraphQL, Chakra UI, Cloudinary, Heroku, HTML/CSS",
  },
  {
    name: "MyCookbook",
    description:
      "This application allows users to create an account to search for and save their own recipes. I am CONSTANTLY losing my recipes so I wanted to make an application where I can keep them all in one place. The app allows the user to fill out a form with any recipe information and save it to their profile. The user can also search the web for recipes using keywords, ingredients, or full recipe names. This search uses the Spoonacular API and search is limited due to using the free version.",
    img: myCookbook,
    github: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    deployed: "https://my-cookbook-recipe-saver-55777e226eb7.herokuapp.com/",
    technologies:
      "NodeJS, Express, Sequelize, MySql2, Bcrypt, Spoonacular API, Heroku, HTML/CSS",
  },
  {
    name: "CareerCraft Resume Builder",
    description:
      "This application provides a simple template for users to generate a resume. The application allows users to sign up for CareerCraft's services, and then gives users access to the resume generator. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM",
    img: careerCraft,
    github: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    deployed: "https://career-craft-2e3c88d80d23.herokuapp.com/login",
    technologies:
      "NodeJS, Express, Sequelize, MySql2, Bcrypt, PDFmake, Heroku, HTML/CSS",
  },
  {
    name: "Dog Blog",
    description:
      "This application is meant for dog lovers and dog owners to share their love and lessons for our furry friends. Users can create an account to read, post, and comment on blog posts all about dogs. The application functions through NodeJs and ExpressJS command line following the MVC paradigm. The application uses Handlebars.js as the template engine, and mySql2 and Sequelize as the ORM",
    img: dogBlog,
    github: "https://github.com/nstark12/dog-blog.git",
    deployed: "https://dog-blog-a03070a07329.herokuapp.com/login",
    technologies:
      "NodeJS, Express, Sequelize, MySql2, Bcrypt, Heroku, HTML/CSS",
  },
  {
    name: "Progressive Web Application - Text Editor",
    description:
      "Just Another Text Editor, or JATE, is a text editor that runs in the browser. JATE features multiple data persistence techniques that act as redundancy if any of the options are not supported by the browser. This application will work offline and can be installed to any computer.",
    img: jate,
    github: "https://github.com/nstark12/text-editor-pwa.git",
    deployed: "https://pwa-text-editor-pwa-a311c8b77a83.herokuapp.com/",
    technologies: "Webpack, IndexedDB, JavaScript",
  },
  {
    name: "Encyclopet",
    description:
      "A simple application to teach a user about any dog or cat breed searched. It also provides random fun facts on cats and dogs.",
    img: encyclopet,
    github: "https://github.com/nstark12/encyclopet",
    deployed: "https://nstark12.github.io/encyclopet/",
    technologies: "Third Party APIs, JavaScript, HTML/CSS",
  },
  {
    name: "Landmark Golf Course Products",
    description:
      "An extensive frontend website for Landmark Golf Course Products that accurately displays their current product offerings.",
    img: landmarkGolf,
    github: "https://github.com/nstark12/landmark-golf",
    deployed: "https://rinowood.com/",
    technologies: "JavaScript, HTML/CSS",
  },
  {
    name: "Landmark Studio & Design",
    description:
      "An extensive frontend website for Landmark Studio & Design that accurately displays their current product offerings.",
    img: landmarkStudio,
    github: "https://github.com/tjansson-ui/JobReadyResumeBuilder.git",
    deployed: "https://landmarkstudio.com/",
    technologies: "JavaScript, HTML/CSS",
  },
];

const Projects = () => {
  return (
    <>
      <div className="container my-5 projects">
        <h1>My Projects</h1>
        <div className="projects">
          {projects.map((project) => {
            return (
              <Card
                name={project.name}
                description={project.description}
                img={project.img}
                github={project.github}
                deployed={project.deployed}
                technologies={project.technologies}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
