import { Link } from 'react-router-dom'
import img from '../assets/logo-2.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark gap-5 p-3">
                <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={img} alt="nicole codes logo"/>
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav pt-1 mx-3">
                            <Link to="/" className="text-light text-decoration-none nav-link mx-5">
                                About
                            </Link>
                            <Link to="projects" className="text-light text-decoration-none nav-link mx-5">
                                Projects
                            </Link>
                            <Link to="contact" className="text-light text-decoration-none nav-link mx-5">
                                Contact
                            </Link>
                            <Link to="resume" className="text-light text-decoration-none nav-link mx-5">
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar