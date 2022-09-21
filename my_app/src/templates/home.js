import { Link } from "react-router-dom";

function HomePage() {
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
                <Link to="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Gardener</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="index.html" className="nav-item nav-link active">Home</Link>
                        <Link to="about.html" className="nav-item nav-link">About</Link>
                        <Link to="service.html" className="nav-item nav-link">Services</Link>
                        <Link to="project.html" className="nav-item nav-link">Projects</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to="feature.html" className="dropdown-item">Features</Link>
                                <Link to="quote.html" className="dropdown-item">Free Quote</Link>
                                <Link to="team.html" className="dropdown-item">Our Team</Link>
                                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                <Link to="404.html" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
            


            
            <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                                <div className="carousel-caption">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                                                <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                <div className="carousel-caption">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-7">
                                                <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
                                                <Link to="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            


            
            <div className="container-fluid top-feature py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5">
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-times text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h4>No Hidden Cost</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5" >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-users text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h4>Dedicated Team</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-white shadow d-flex align-items-center h-100 px-5" >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-phone text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h4>24/7 Available</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded" data-wow-delay="0.1s" src="img/about.jpg" />
                        </div>
                        <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 className="display-1 text-primary mb-0">25</h1>
                            <p className="text-primary mb-4">Year of Experience</p>
                            <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link className="btn btn-primary py-3 px-4" to="">Explore More</Link>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-5">
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-award fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">Award Winning</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-users fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">Dedicated Team</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-fluid facts my-5 py-5" data-parallax="scroll">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                        </div>
                        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <h1 className="display-4 text-white" data-toggle="counter-up">1234</h1>
                            <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
                            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link className="btn btn-primary py-3 px-4" to="">Explore More</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="text-center rounded py-5 px-4" >
                                                <div className="btn-square bg-light rounded-circle mx-auto mb-4" >
                                                    <i className="fa fa-check fa-3x text-primary"></i>
                                                </div>
                                                <h4 className="mb-0">100% Satisfaction</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="text-center rounded py-5 px-4" >
                                                <div className="btn-square bg-light rounded-circle mx-auto mb-4" >
                                                    <i className="fa fa-users fa-3x text-primary"></i>
                                                </div>
                                                <h4 className="mb-0">Dedicated Team</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="text-center rounded py-5 px-4" >
                                        <div className="btn-square bg-light rounded-circle mx-auto mb-4" >
                                            <i className="fa fa-tools fa-3x text-primary"></i>
                                        </div>
                                        <h4 className="mb-0">Modern Equipment</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5">Services That We Offer For You</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Landscaping</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-6.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Pruning plants</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-5.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Irrigation & Drainage</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Garden Maintenance </h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-5.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-8.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Green Technology</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="img/service-6.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">Urban Gardening</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <Link className="btn btn-sm" to=""><i className="fa fa-plus text-primary me-2"></i>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src="img/carousel-2.jpg">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-5 text-center mb-5">Get A Free Quote</h1>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-light border-0" id="gname" placeholder="Gurdian Name"/>
                                                <label htmlFor="gname">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email"/>
                                                <label htmlFor="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-light border-0" id="cname" placeholder="Child Name"/>
                                                <label htmlFor="cname">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control bg-light border-0" id="cage" placeholder="Child Age"/>
                                                <label htmlFor="cage">Service Type</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                        <p className="fs-5 fw-bold text-primary">Our Projects</p>
                        <h1 className="display-5 mb-5">Some Of Our Wonderful Projects</h1>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline rounded mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">Complete Projects</li>
                                <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-1.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Landscaping</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-2.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Pruning plants</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-3.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Irrigation & Drainage</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-4.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Garden Maintenance</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-5.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Green Technology</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="img/service-6.jpg" alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white mb-4">Urban Gardening</h4>
                                        <div className="d-flex">
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to="img/service-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                            <Link className="btn btn-lg-square rounded-circle mx-2" to=""><i className="fa fa-link"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                        <p className="fs-5 fw-bold text-primary">Our Team</p>
                        <h1 className="display-5 mb-5">Dedicated & Experienced Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">Doris Jordan</h4>
                                        <p className="text-primary">Landscape Designer</p>
                                        <div className="team-social d-flex">
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-twitter"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">Johnny Ramirez</h4>
                                        <p className="text-primary">Garden Designer</p>
                                        <div className="team-social d-flex">
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-twitter"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                    <div className="team-text">
                                        <h4 className="mb-0">Diana Wagner</h4>
                                        <p className="text-primary">Senior Gardener</p>
                                        <div className="team-social d-flex">
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-twitter"></i></Link>
                                            <Link className="btn btn-square rounded-circle me-2" to=""><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Testimonial</p>
                            <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                            <Link className="btn btn-primary py-3 px-4" to="">See More</Link>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <img className="img-fluid rounded mb-3" src="img/testimonial-1.jpg" alt="" />
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid rounded mb-3" src="img/testimonial-2.jpg" alt="" />
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                        <h4>Client Name</h4>
                                        <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-square btn-outline-light rounded-circle me-2" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Services</h4>
                            <Link className="btn btn-link" to="">Landscaping</Link>
                            <Link className="btn btn-link" to="">Pruning plants</Link>
                            <Link className="btn btn-link" to="">Urban Gardening</Link>
                            <Link className="btn btn-link" to="">Garden Maintenance</Link>
                            <Link className="btn btn-link" to="">Green Technology</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <Link className="btn btn-link" to="">About Us</Link>
                            <Link className="btn btn-link" to="">Contact Us</Link>
                            <Link className="btn btn-link" to="">Our Services</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="">Support</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


            
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">Your Site Name</Link>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            
                            Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link> Distributed By <Link to="https://themewagon.com">ThemeWagon</Link>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default HomePage;