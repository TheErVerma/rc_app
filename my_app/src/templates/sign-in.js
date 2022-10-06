import { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { sh_auth } from '../firebase';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function SignInPage() {

    const [uname, setUname] = useState("");
    const [upass, setUpass] = useState("");
    const history = useNavigate();

    var [errorList, setErrorList] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(sh_auth, uname, upass);
            history('/data');
        } catch (error) {
            console.log(error.message);
            setErrorList(error.message);
        }
    }

    return (
        <div className='container py-5'>
            <div className='card m-auto p-4 border shadow-sm rounded' style={{ maxWidth: "350px" }}>
                <div className='card-header border-0 bg-transparent'>
                    <h4>Sign In</h4>
                </div>
                <div className='card-body'>
                    <div className='mb-3'>
                        <input type="text" className="form-control" onChange={(e) => { setUname(e.target.value) }} placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <input type="password" className="form-control" onChange={(e) => { setUpass(e.target.value) }} placeholder='Password' />
                    </div>
                    <div className='d-grid gap-0'>
                        <button className='btn btn-success' onClick={login}>Proceed</button>
                    </div>
                </div>
                {
                    errorList != "" ? <div className="alert alert-danger">{errorList}</div> : ""
                }

                <div className='card-footer border-0 bg-transparent ' style={{ fontSize: "13px" }}>
                    <p>Don't have an account? <NavLink to="/sign-up">Create new account</NavLink>.</p>
                </div>
            </div>
        </div>
    );
}
export default SignInPage;