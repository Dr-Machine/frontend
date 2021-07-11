import React from 'react';
import {Link,NavLink} from 'react-router-dom';


const Navbar =({show,fullpage})=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={()=>fullpage?.moveTo("header")}>Dr. Machine</Link>
            {show &&
            <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/#service" onClick={()=>fullpage.moveTo("service")}>Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/#team" onClick={()=>fullpage.moveTo("team")}>Team</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/#contact" onClick={()=>fullpage.moveTo("contact")}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link btn btn-outline-success px-4" to="/login">log in</NavLink>
                    </li>
                </ul>
            </div>
            </>
            }
        </div>
    </nav>
)}

export default Navbar;