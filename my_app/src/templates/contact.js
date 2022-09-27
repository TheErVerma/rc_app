import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import carousel_1 from "../img/carousel-1.jpg";
import Database from "../firebase";
import { ref, set } from "firebase/database";

function ContactPage() {

    var [uname, setUname] = useState();
    var [umail, setUmail] = useState();
    var [usubject, setUsubject] = useState();
    var [umessage, setUmessage] = useState();


    function post_form_data(e) {
        e.preventDefault();
        document.querySelector('button[type=submit]').innerHTML = "Sending...";
        var current_time = new Date().getTime();
        const db = Database;
        if (set(ref(db, "Customers/customer-" + current_time), {
            name: uname,
            email: umail,
            subject: usubject,
            message: umessage
        })) {
            document.querySelector('#contact_message_form').style.display = "none";
            document.querySelector('.after_msg_sent').style.display = "block";
            console.log("Message Sent");
        }
    }


    var cont_bg = {
        "background": "linear-gradient(rgba(15, 66, 41, .6), rgba(15, 66, 41, .6)), url(" + carousel_1 + ") center center no-repeat",
        "backgroundSize": "cover"
    }
    return (
        <div>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={cont_bg}>
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Contact Us</p>
                            <h1 className="display-5 mb-5">If You Have Any Query, Please Contact Us</h1>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                            <form onSubmit={post_form_data} id="contact_message_form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" onChange={(e) => setUname(e.target.value)} required />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" onChange={(e) => setUmail(e.target.value)} required />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={(e) => setUsubject(e.target.value)} required />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ "height": "100px" }} onChange={(e) => setUmessage(e.target.value)} required></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <div className="after_msg_sent bg-success p-4 rounded" style={{display:"none"}}>
                                <h4 className="text-light">
                                    <FontAwesomeIcon icon={faCheck} className="text-white me-2" />
                                    Message Sent
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ "minHeight": " 450px" }}>
                            <div className="position-relative rounded overflow-hidden h-100">
                                <iframe className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder="0" style={{ "minHeight": "450px", "border": "0" }} allowFullScreen="" aria-hidden="false"
                                    tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;