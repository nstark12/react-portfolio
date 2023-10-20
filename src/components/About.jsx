import img from '../assets/background.png'
const About = () => {
    return (
        <>
            <div className="hero">
                <h1>Hi...I'm Nicole!</h1>      
            </div>
            <div className="container about d-flex my-5">
            <div className="about-text">
                <h1>About Me</h1>
                <p>I am a Marketing Director from Wisconsin freelancing in Web Development & Design. I am currently completing a certificate in Full Stack Web Development from the University of Wisconsin. Additionally, I graduated from the University of Wisconsin-Madison with a degree in Marketing and a degree in Management.</p>
            </div>
            <div className="about-img">
                <img src={img} alt="" />
            </div>

            </div>
        </>
    )
}

export default About