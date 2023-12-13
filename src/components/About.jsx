import img from "../assets/self.png";
const About = () => {
  return (
    <>
      <div className="hero">
        <h1>Hi...I&#39;m Nicole!</h1>
      </div>
      <div
        className="container about d-flex my-5 justify-content-between align-items-center"
        id="about"
      >
        <div className="about-text">
          <h1>About Me</h1>
          <p className="me-4">
            I am a Marketing Director from Wisconsin freelancing in Web
            Development & Design. I have two years of self-taught coding
            experience and I have a certificate in Full Stack Web Development
            from the University of Wisconsin. Additionally, I graduated from the
            University of Wisconsin-Madison with a degree in Marketing and a
            degree in Management.
          </p>
        </div>
        <div className="about-img">
          <img src={img} alt="image of Nicole Stark" />
        </div>
      </div>
    </>
  );
};

export default About;
