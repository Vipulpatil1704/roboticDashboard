import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './css/Navbar.css'
export default function Navbar() {
    const navigate=useNavigate();
    function handleLogout(){
        localStorage.removeItem("authToken");
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-success p-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {(localStorage.getItem('authToken')===null) ?<li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>:<div>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">My Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleLogout} className="nav-link">Logout</Link>
                            </li>
                                </div>}

            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
