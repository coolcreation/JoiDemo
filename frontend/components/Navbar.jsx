import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg px-2 px-lg-4 py-lg-1">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={'./coffee_shop_logo_white.jpg'} alt="" width='80'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mt-2 mb-lg-0 mt-lg-0 w-100 gap-lg-3">


                    <li class="col-11 col-md-9 ms-lg-auto mx-auto mx-lg-0 col-lg-auto">
                        <Link to="/blogposts" className="nav-link">Blog Posts</Link>
                    </li>

                </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}
