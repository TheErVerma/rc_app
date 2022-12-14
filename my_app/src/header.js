import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { sh_auth } from "./firebase";
import { onAuthStateChanged } from 'firebase/auth'

function MainHeader() {

    const [mainuser, setMainuser] = useState("");

    onAuthStateChanged(sh_auth, () => {
        if(sh_auth.currentUser != null){
            setMainuser(sh_auth.currentUser.email);
        }else{
            setMainuser(null);
        }
    })

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
                            <NavLink className="btn btn-link text-light" to=""><i className="fab fa-facebook-f"></i></NavLink>
                            <NavLink className="btn btn-link text-light" to=""><i className="fab fa-twitter"></i></NavLink>
                            <NavLink className="btn btn-link text-light" to=""><i className="fab fa-linkedin-in"></i></NavLink>
                            <NavLink className="btn btn-link text-light" to=""><i className="fab fa-instagram"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>




            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Gardener</h1>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/home" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        {
                            (mainuser != null) ? <NavLink to="/data" className="nav-item nav-link">Data</NavLink> :
                                <NavLink to="/sign-in" className="nav-item nav-link">Sign In</NavLink>
                        }
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainHeader;