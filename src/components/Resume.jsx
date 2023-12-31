import resume from "../assets/res-dec.pdf";
import resumeImg from "../assets/res-dec-min.png";

const Resume = () => {
  return (
    <>
      <div className="container my-5 resume">
        <h1>Resume</h1>
        <a href={resume} download>
          Download My Resume
        </a>

        <img src={resumeImg} alt="Nicole Stark Resume image" />

        <h1>My Proficiencies</h1>
        <div className="proficiencies my-5">
          <div className="type">
            <h2>Front-End</h2>

            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>APIs</p>
            <p>Git</p>
          </div>
          <div className="type">
            <h2>Back-End</h2>

            <p>Node.js</p>
            <p>Express.js</p>
            <p>MySQL</p>
            <p>Sequelize</p>
            <p>Jest</p>
            <p>Model-View-Controller</p>
            <p>Object-Relational-Mapping</p>
          </div>
          <div className="type">
            <h2>Performance</h2>
            <p>NoSQL</p>
            <p>Apollo</p>
            <p>GraphQL</p>
            <p>Progressive Web Applications (PWA)</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>React</p>
            <p>Next.js</p>
            <p>MERN</p>
            <p>State</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
