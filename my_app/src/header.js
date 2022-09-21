import {Outlet, Link} from 'react-router-dom'

function MainHeader() {
    return (
        <div>
            <div className="container-fluid bg-dark text-light px-0 py-2">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"></span>
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"></span>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <Link className="btn btn-link text-light" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-link text-light" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-link text-light" to=""><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-link text-light" to=""><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Gardener</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="" className="nav-item nav-link">Services</Link>
                        <Link to="" className="nav-item nav-link">Projects</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to="" className="dropdown-item">Features</Link>
                                <Link to="" className="dropdown-item">Free Quote</Link>
                                <Link to="" className="dropdown-item">Our Team</Link>
                                <Link to="" className="dropdown-item">Testimonial</Link>
                                <Link to="" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainHeader;