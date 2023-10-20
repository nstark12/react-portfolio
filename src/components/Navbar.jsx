import { Link } from 'react-router-dom'
import img from '../assets/logo-2.png'

const Navbar = () => {
    return (
        <>
            <nav className="d-flex justify-content-right bg-dark gap-5 p-3">
                <Link to="/">
                    <img src={img} alt="nicole codes logo" />
                </Link>
                <Link to="/" className="text-light text-decoration-none">
                    About
                </Link>
                <Link to="projects" className="text-light text-decoration-none">
                    Projects
                </Link>
                <Link to="contact" className="text-light text-decoration-none">
                    Contact
                </Link>
                <Link to="resume" className="text-light text-decoration-none">
                    Resume
                </Link>
            </nav>
        </>
    )
}

export default Navbar