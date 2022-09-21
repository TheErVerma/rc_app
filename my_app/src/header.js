import {Outlet, Link} from 'react-router-dom'

function MainHeader() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default MainHeader;