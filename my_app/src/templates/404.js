import { Link } from "react-router-dom";
import { faTimes, faUsers, faPhone, faAward, faCheck, faTools, faPlus, faEye, faLink, faWarning } from '@fortawesome/free-solid-svg-icons'
import carousel_1 from "../img/carousel-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function No_page_temp() {
    var carousel_img = {
        "background":"linear-gradient(rgba(15, 66, 41, .6), rgba(15, 66, 41, .6)), url("+carousel_1+")center no-repeat"

    }
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={carousel_img}>
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">404 Error</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {/* <i className="bi bi-exclamation-triangle display-1 text-primary"></i> */}
                            <FontAwesomeIcon icon={faWarning} className="text-primary" style={{ "fontSize":"62px", "marginBottom":"30px"}}/>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary py-3 px-4" to="">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default No_page_temp;