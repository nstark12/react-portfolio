import { Link } from 'react-router-dom'
import img from '../assets/logo-2.png'

const Footer = () => {
    return (
        <footer className='d-flex flex-column align-items-center p-3 justify-content-center bg-dark'>
            <div className="logo my-2">
                <p>nicolecodes&copy; 2023</p>
            </div>
            <div className="links">
                <Link to="/" className="text-light mx-5 text-decoration-none">
                    About
                </Link>
                <Link to="projects" className="text-light mx-5 text-decoration-none">
                    Projects
                </Link>
                <Link to="contact" className="text-light mx-5 text-decoration-none">
                    Contact
                </Link>
                <Link to="resume" className="text-light mx-5 text-decoration-none">
                    Resume
                </Link>
            </div>    
        </footer>
    )
}

export default Footer